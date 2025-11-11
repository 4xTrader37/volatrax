import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, BarChart, ShieldCheck, Users, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const phoneNumber = "+923451811267";
  const message = "I want to join free signal group";
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(
    /\D/g,
    ''
  )}${message ? `?text=${encodeURIComponent(message)}` : ''}`;

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary tracking-tight font-headline">
            Grow Your Skills & Profits with Volatrax
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
            Volatrax is a trusted digital service company offering account management and professional trading courses. Our mission is to help traders succeed with smart strategies and transparent terms.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/courses">Explore Courses</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/account-management">Account Management</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section id="services" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Users className="text-accent" />
                  <span>Account Management</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Let our professional traders manage your account. We offer programs for both small and large balances with transparent profit-sharing.
                </p>
                <Button asChild variant="link" className="px-0">
                  <Link href="/account-management">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <BarChart className="text-accent" />
                  <span>Trading Courses</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Master the markets with our comprehensive trading courses, designed for all skill levels. Pass the final test for a 50% refund.
                </p>
                <Button asChild variant="link" className="px-0">
                  <Link href="/courses">View Courses <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">Why Choose Volatrax?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-6xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="bg-primary text-primary-foreground p-4 rounded-full mb-4">
                <BarChart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Strategies</h3>
              <p className="text-muted-foreground">
                Our strategies are built on years of market analysis and experience, designed to maximize your growth potential.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-primary text-primary-foreground p-4 rounded-full mb-4">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Transparent Terms</h3>
              <p className="text-muted-foreground">
                We believe in clarity. Our profit-sharing models and course conditions are straightforward and honest.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-primary text-primary-foreground p-4 rounded-full mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-muted-foreground">
                Our team consists of professional traders and educators dedicated to your financial success and skill development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Signal Group Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">
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
        </div>
      </section>
    </div>
  );
}
