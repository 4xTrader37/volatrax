import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { CheckCircle2, Star } from 'lucide-react';
import type { Metadata } from 'next';
import ContactWhatsappButton from '@/components/contact-whatsapp-button';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'VIP Signal Group | Volatrax',
  description: 'Join our VIP signal group for exclusive trading signals on Boom 1000, Crash 1000, and more. Choose a plan that suits you.',
};

const plans = [
  {
    title: '1 Day Demo',
    price: 'Free',
    priceValue: 0,
    features: [
      '10-15 signals per day',
      'Boom 1000 & Crash 1000 signals',
      'Signals for other Boom & Crash pairs',
    ],
    isFeatured: false,
  },
  {
    title: '1 Week Plan',
    price: 'PKR 1,500',
    priceValue: 1500,
    features: [
        '10-15 signals per day',
        'Boom 1000 & Crash 1000 signals',
        'Signals for other Boom & Crash pairs',
    ],
    isFeatured: false,
  },
  {
    title: '2 Week Plan',
    price: 'PKR 2,500',
    priceValue: 2500,
    features: [
        '10-15 signals per day',
        'Boom 1000 & Crash 1000 signals',
        'Signals for other Boom & Crash pairs',
    ],
    isFeatured: true,
  },
  {
    title: '1 Month Plan',
    price: 'PKR 4,500',
    priceValue: 4500,
    features: [
        '10-15 signals per day',
        'Boom 1000 & Crash 1000 signals',
        'Signals for other Boom & Crash pairs',
    ],
    isFeatured: false,
  },
  {
    title: 'Lifetime Access',
    price: 'PKR 10,000',
    priceValue: 10000,
    features: [
        '10-15 signals per day',
        'Boom 1000 & Crash 1000 signals',
        'Signals for other Boom & Crash pairs',
    ],
    isFeatured: false,
  },
];

const FeatureItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-3">
    <CheckCircle2 className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
    <span className="text-muted-foreground">{children}</span>
  </li>
);

export default function VipSignalsPage() {
  const phoneNumber = "+923451811267";

  return (
    <div className="container mx-auto max-w-7xl px-4 py-16 sm:py-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl font-headline">
          VIP Signal Group
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Get exclusive access to high-quality trading signals and elevate your trading game.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan) => (
          <Card key={plan.title} className={`flex flex-col ${plan.isFeatured ? 'border-primary shadow-lg' : ''}`}>
            {plan.isFeatured && (
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-sm font-bold">
                <Star className="h-4 w-4 mr-2" />
                Most Popular
              </Badge>
            )}
            <CardHeader>
              <CardTitle className="text-2xl font-headline">{plan.title}</CardTitle>
              <CardDescription className="text-3xl font-bold text-primary">{plan.price}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-4">
                {plan.features.map((feature, index) => (
                  <FeatureItem key={index}>{feature}</FeatureItem>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              {plan.priceValue > 0 ? (
                <ContactWhatsappButton courseTitle={`VIP Signal Group - ${plan.title}`} phoneNumber={phoneNumber} />
              ) : (
                <ContactWhatsappButton courseTitle={`VIP Signal Group - ${plan.title}`} phoneNumber={phoneNumber} />
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
