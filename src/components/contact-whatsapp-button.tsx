'use client';

import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import Link from 'next/link';

interface ContactWhatsappButtonProps {
  courseTitle: string;
  phoneNumber: string;
}

export default function ContactWhatsappButton({ courseTitle, phoneNumber }: ContactWhatsappButtonProps) {

  const prefilledMessage = `I am interested in the course titled ${courseTitle}. I would like to know more about the course.`;
  const encodedMessage = encodeURIComponent(prefilledMessage);
  const cleanPhoneNumber = phoneNumber.replace(/\D/g, '');
  const whatsappUrl = `https://wa.me/${cleanPhoneNumber}?text=${encodedMessage}`;

  return (
    <Button asChild className="w-full" variant="default">
        <Link href={whatsappUrl} target="_blank" rel="noopener,noreferrer">
            <MessageCircle className="mr-2 h-4 w-4" />
            Contact via WhatsApp
        </Link>
    </Button>
  );
}
