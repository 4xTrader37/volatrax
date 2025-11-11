'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { generateWhatsAppMessage } from '@/ai/flows/generate-whatsapp-message';
import { Loader2, MessageCircle } from 'lucide-react';

interface ContactWhatsappButtonProps {
  courseTitle: string;
  phoneNumber: string;
}

export default function ContactWhatsappButton({ courseTitle, phoneNumber }: ContactWhatsappButtonProps) {
  const [isPending, setIsPending] = useState(false);
  const { toast } = useToast();

  const handleContact = async () => {
    setIsPending(true);
    try {
      const { prefilledMessage } = await generateWhatsAppMessage({ courseTitle });
      const encodedMessage = encodeURIComponent(prefilledMessage);
      const cleanPhoneNumber = phoneNumber.replace(/\D/g, '');
      const whatsappUrl = `https://wa.me/${cleanPhoneNumber}?text=${encodedMessage}`;
      
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Failed to generate WhatsApp message:', error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Could not generate message. Please try again.',
      });
    } finally {
      setIsPending(false);
    }
  };

  return (
    <Button onClick={handleContact} disabled={isPending} className="w-full" variant="default">
      {isPending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Generating...
        </>
      ) : (
        <>
          <MessageCircle className="mr-2 h-4 w-4" />
          Contact via WhatsApp
        </>
      )}
    </Button>
  );
}
