import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import WhatsappButton from '@/components/whatsapp-button';
import { ThemeProvider } from '@/components/providers';

export const metadata: Metadata = {
  title: 'Volatrax Digital Services | Account Management & Trading Courses',
  description: 'A trusted digital service company offering account management and professional trading courses. Our mission is to help traders grow their skills and profits with smart strategies and transparent terms.',
  keywords: ['trading', 'account management', 'forex', 'courses', 'profit sharing', 'volatrax'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('min-h-screen bg-background font-body antialiased')}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <div className="relative flex min-h-dvh flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            </div>
            <WhatsappButton phoneNumber="+923451811267" />
            <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
