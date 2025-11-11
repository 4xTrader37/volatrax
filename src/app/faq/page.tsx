import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from '@/components/ui/accordion';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'FAQ | Volatrax',
    description: 'Find answers to frequently asked questions about our trading courses, account management, and payment processes.',
};

const faqs = [
    {
        question: 'What are synthetic indices?',
        answer: 'Synthetic indices are markets that are simulated and not based on any real-world underlying asset. They are available to trade 24/7 and are not affected by real-world events or market hours. Examples include Boom 1000 and Crash 1000.',
    },
    {
        question: 'Are the courses suitable for absolute beginners?',
        answer: 'Yes! Our "Synthetic Indices Trading course for beginners" is completely free and designed specifically for those with no prior trading experience. We also offer more advanced courses as you progress.',
    },
    {
        question: 'What is the profit-sharing model for account management?',
        answer: 'We offer a standard 50/50 profit-sharing model. For small accounts, the first week is profit-free for Volatrax, and after account recovery, profits are shared every 3 days. For big accounts, it is a straight 50/50 split on all gains.',
    },
    {
        question: 'How do I enroll in a paid course?',
        answer: 'To enroll, go to the course page, and you will find payment instructions for Sadapay. After making the payment, take a screenshot and upload it on the same page. Then, click the WhatsApp button to send us the proof. You will need to manually paste the screenshot in the chat.',
    },
    {
        question: 'What happens if I lose money with account management?',
        answer: 'Trading always involves risk. For our small account management service, if the account is wiped before the initial investment is recovered, Volatrax will refund 50% of your loss to help mitigate the risk.',
    },
    {
        question: 'What benefits do I get after completing a paid course?',
        answer: 'Upon successful completion of any of our paid courses, we will add you to our VIP signal group free of cost, where you will get access to premium trading signals and analysis.',
    },
];
  

export default function FAQPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-16 sm:py-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl font-headline">
          Frequently Asked Questions
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Find answers to common questions about our services. If you can&apos;t find what you&apos;re looking for, feel free to contact us.
        </p>
      </div>

      <div className="mt-16">
        <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                        {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground">
                        {faq.answer}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
      </div>
    </div>
  );
}
