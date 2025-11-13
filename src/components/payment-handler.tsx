'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import Link from 'next/link';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';

interface PaymentHandlerProps {
  courseTitle: string;
  phoneNumber: string;
  price: number;
}

export default function PaymentHandler({ courseTitle, phoneNumber, price }: PaymentHandlerProps) {
  const [isPaid, setIsPaid] = useState(false);

  const prefilledMessage = isPaid
    ? `I am interested in "${courseTitle}" I have paid ${price} .`
    : `Hello , I'm Interested in "${courseTitle}" course`;

  const encodedMessage = encodeURIComponent(prefilledMessage);
  const cleanPhoneNumber = phoneNumber.replace(/\D/g, '');
  const whatsappUrl = `https://wa.me/${cleanPhoneNumber}?text=${encodedMessage}`;

  return (
    <Card className="mt-8 border-primary">
        <CardHeader>
            <CardTitle className="font-headline">Complete Your Enrollment</CardTitle>
            <CardDescription>Follow these steps to get access to the course.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
            <div>
                <h3 className="font-semibold text-lg mb-2">Step 1: Make Payment</h3>
                <p className="text-muted-foreground mb-4">Pay <span className="font-bold text-primary">PKR {price.toLocaleString()}</span> to the account below:</p>
                <div className="bg-muted p-4 rounded-md text-sm">
                    <p><strong>Bank:</strong> Sadapay</p>
                    <p><strong>Account Name:</strong> Fozia Naseem</p>
                    <p><strong>Account Number:</strong> 03298937732</p>
                </div>
            </div>
            
            <div>
                <h3 className="font-semibold text-lg mb-2">Step 2: Confirm Payment</h3>
                <p className="text-muted-foreground mb-4">Tick the box below if you have completed the payment.</p>
                <div className="flex items-center space-x-2 my-4">
                  <Checkbox id="ihavepaid" checked={isPaid} onCheckedChange={(checked) => setIsPaid(checked as boolean)} />
                  <Label htmlFor="ihavepaid" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    I have paid
                  </Label>
                </div>
            </div>

            <div>
                <h3 className="font-semibold text-lg mb-2">Step 3: Confirm via WhatsApp</h3>
                <p className="text-muted-foreground mb-4">Click the button below to send us your confirmation.</p>
                 <Button asChild className="w-full">
                    <Link href={whatsappUrl} target="_blank" rel="noopener,noreferrer">
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Contact via WhatsApp
                    </Link>
                </Button>
            </div>

        </CardContent>
    </Card>
  );
}
