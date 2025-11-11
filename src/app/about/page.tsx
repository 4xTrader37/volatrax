import { Users, BarChart, ShieldCheck, Target } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Us | Volatrax',
  description: 'Learn about the mission, vision, and expert team behind Volatrax Digital Services.',
};

const teamMembers = [
  {
    name: 'Fozia Naseem',
    role: 'Founder & Lead Strategist',
    bio: 'With over a decade of experience in financial markets, Fozia founded Volatrax to empower traders with the knowledge and tools needed to succeed. Her expertise lies in developing smart, data-driven trading strategies.',
    imageUrl: 'https://picsum.photos/seed/person1/400/400',
    imageHint: 'professional woman portrait',
  },
  {
    name: 'Jane Doe',
    role: 'Head of Account Management',
    bio: 'Jane is a seasoned professional with a passion for helping clients achieve their financial goals. She leads our account management team, ensuring transparency and a focus on long-term growth for our clients.',
    imageUrl: 'https://picsum.photos/seed/person2/400/400',
    imageHint: 'professional woman smiling',
  },
  {
    name: 'John Smith',
    role: 'Senior Market Analyst & Educator',
    bio: 'John specializes in synthetic indices and market analysis. He is the lead instructor for our advanced courses, dedicated to breaking down complex topics into understandable and actionable lessons.',
    imageUrl: 'https://picsum.photos/seed/person3/400/400',
    imageHint: 'professional man portrait',
  },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-16 sm:py-24">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl font-headline">
          The Story Behind Volatrax
        </h1>
        <p className="mt-6 mx-auto max-w-3xl text-lg leading-8 text-muted-foreground">
          A trusted digital service company offering account management and professional trading courses. Our mission is to help traders grow their skills and profits with smart strategies and transparent terms.
        </p>
      </section>

      {/* Mission and Vision Section */}
      <section className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-lg">
            <Image
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Our Team in a meeting"
                fill
                className="object-cover"
                data-ai-hint="team meeting"
            />
        </div>
        <div className="space-y-8">
          <div>
            <div className="flex items-center gap-3">
              <Target className="h-8 w-8 text-accent" />
              <h2 className="text-3xl font-bold font-headline text-primary">Our Mission</h2>
            </div>
            <p className="mt-4 text-lg text-muted-foreground">
              To provide traders of all levels with accessible, high-quality education and transparent account management services, empowering them to navigate the financial markets with confidence and skill.
            </p>
          </div>
          <div>
            <div className="flex items-center gap-3">
              <BarChart className="h-8 w-8 text-accent" />
              <h2 className="text-3xl font-bold font-headline text-primary">Our Vision</h2>
            </div>
            <p className="mt-4 text-lg text-muted-foreground">
              To be a leading digital service provider in the trading community, known for our integrity, innovative strategies, and unwavering commitment to our clients' success.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section from Home Page */}
      <section id="why-us" className="py-16 md:py-24 bg-card mt-16 rounded-lg">
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

      {/* Team Section */}
      <section className="mt-20 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">
          Meet Our Team
        </h2>
        <p className="mt-4 mx-auto max-w-2xl text-lg leading-8 text-muted-foreground">
          We are a team of dedicated professionals passionate about helping you succeed in the trading world.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12">
          {teamMembers.map((member) => (
            <div key={member.name} className="flex flex-col items-center text-center">
              <div className="relative h-40 w-40 rounded-full overflow-hidden shadow-lg">
                <Image
                  src={member.imageUrl}
                  alt={`Portrait of ${member.name}`}
                  fill
                  className="object-cover"
                  data-ai-hint={member.imageHint}
                />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-primary">{member.name}</h3>
              <p className="text-accent font-medium">{member.role}</p>
              <p className="mt-2 text-muted-foreground">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}