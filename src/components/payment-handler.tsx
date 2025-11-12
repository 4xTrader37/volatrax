'use client';

import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Loader2, MessageCircle, Upload } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import Link from 'next/link';

interface PaymentHandlerProps {
  courseTitle: string;
  phoneNumber: string;
  price: number;
}

export default function PaymentHandler({ courseTitle, phoneNumber, price }: PaymentHandlerProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        toast({
            variant: "destructive",
            title: "File too large",
            description: "Please select an image smaller than 5MB.",
        });
        setSelectedFile(null);
      } else {
        setSelectedFile(file);
        toast({
            title: "Screenshot Selected",
            description: "Your payment proof is ready. Click the WhatsApp button to continue.",
        });
      }
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleContact = async () => {
    if (!selectedFile) {
        toast({
            variant: "destructive",
            title: "No Screenshot",
            description: "Please upload your payment screenshot before contacting us.",
        });
        return;
    }
    
    // Copy image to clipboard to make it easier for user to paste
    try {
        await navigator.clipboard.write([
            new ClipboardItem({
              [selectedFile.type]: selectedFile
            })
        ]);
        toast({
            title: "Action Required",
            description: "Please paste the screenshot in the WhatsApp chat to complete your enrollment.",
            duration: 10000,
        });
    } catch (error) {
        console.error('Failed to copy image to clipboard:', error);
        toast({
            variant: 'destructive',
            title: 'Clipboard Error',
            description: 'Could not copy screenshot. Please attach it manually in WhatsApp.',
        });
    }
  };

  const prefilledMessage = `I am interested in the course titled ${courseTitle}.\n\nI have sent the payment of PKR ${price}. Please find the screenshot attached.`;
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
                 <p className="text-xs text-muted-foreground mt-2">Please take a screenshot of the payment confirmation.</p>
            </div>
            
            <div>
                <h3 className="font-semibold text-lg mb-2">Step 2: Upload Proof</h3>
                <p className="text-muted-foreground mb-4">Upload the screenshot of your payment to proceed.</p>
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className="hidden"
                    accept="image/png, image/jpeg, image/jpg"
                />
                <Button onClick={handleUploadClick} variant="outline" className="w-full">
                    <Upload className="mr-2 h-4 w-4" />
                    {selectedFile ? `Selected: ${selectedFile.name}` : 'Select Screenshot'}
                </Button>
            </div>

            <div>
                <h3 className="font-semibold text-lg mb-2">Step 3: Confirm via WhatsApp</h3>
                <p className="text-muted-foreground mb-4">Click the button below to send us your confirmation.</p>
                 <Button asChild disabled={!selectedFile} className="w-full" onClick={handleContact}>
                    <Link href={whatsappUrl} target="_blank" rel="noopener,noreferrer">
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Contact & Send Proof via WhatsApp
                    </Link>
                </Button>
                {selectedFile && (
                    <Alert variant="default" className="mt-4 bg-accent/20">
                        <AlertTitle className="font-semibold">Ready to Send!</AlertTitle>
                        <AlertDescription>
                        Your screenshot is copied. After clicking the button, simply **paste (Ctrl+V or Command+V)** the image into the WhatsApp chat.
                        </AlertDescription>
                    </Alert>
                )}
            </div>

        </CardContent>
    </Card>
  );
}
