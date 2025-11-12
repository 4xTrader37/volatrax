
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { CheckCircle2, MessageCircle } from 'lucide-react';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import ContactWhatsappButton from '@/components/contact-whatsapp-button';

export const metadata: Metadata = {
  title: 'Account Management | Volatrax',
  description: 'Explore our account management services for small and big accounts. Transparent rules, profit sharing, and professional traders.',
};

const smallAccountRules = [
  'Applicable for balances like $10, $20, etc.',
  'First week of trading is profit-free for Volatrax.',
  'Investment withdrawal is requested upon full account recovery.',
  'After recovery, profit is shared 50/50 every 3 days.',
  'If account is wiped pre-recovery, Volatrax refunds 50% of the loss.',
];

const bigAccountRules = [
  'For balances of $100 and above.',
  'Managed by our most experienced professional traders.',
  'Receive comprehensive weekly performance reports.',
  'Standard 50/50 profit sharing on all gains.',
  'Priority support directly via WhatsApp.',
];

const RuleItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-3">
    <CheckCircle2 className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
    <span className="text-muted-foreground">{children}</span>
  </li>
);

export default function AccountManagementPage() {
  const phoneNumber = "+923451811267";
  const whatsappUrl = "https://chat.whatsapp.com/IP7JwoykWnBIjNDQjrvtPj";

  return (
    <div className="container mx-auto max-w-7xl px-4 py-16 sm:py-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl font-headline">
          Account Management Services
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Tailored programs designed for your investment size, with clear rules and a focus on growth.
        </p>
      </div>

      <section className="my-16 py-12 bg-card rounded-lg text-center">
          <h2 className="text-3xl font-bold text-primary font-headline">
            Join Our Free Signal Group
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Get access to exclusive trading signals, market analysis, and a community of traders.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Join via WhatsApp
              </Link>
            </Button>
          </div>
      </section>

      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle className="text-2xl font-headline">Small Account Management</CardTitle>
            <CardDescription>Ideal for beginners and those starting with smaller capital.</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <ul className="space-y-4">
              {smallAccountRules.map((rule, index) => (
                <RuleItem key={index}>{rule}</RuleItem>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <ContactWhatsappButton courseTitle="Small Account Management" phoneNumber={phoneNumber} />
          </CardFooter>
        </Card>
        <Card className="flex flex-col border-primary shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-headline">Big Account Management</CardTitle>
            <CardDescription>Premium service for serious investors seeking professional handling.</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <ul className="space-y-4">
              {bigAccountRules.map((rule, index) => (
                <RuleItem key={index}>{rule}</RuleItem>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <ContactWhatsappButton courseTitle="Big Account Management" phoneNumber={phoneNumber} />
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
