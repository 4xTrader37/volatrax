import { Icons } from '@/components/icons';
import { Youtube } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';

const TikTokIcon = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M21 7.5a4.5 4.5 0 0 1-4.5 4.5H12v6a4.5 4.5 0 1 0 4.5-4.5V7.5a4.5 4.5 0 1 1 4.5 4.5"/>
    </svg>
);


export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0 pb-32 md:pb-10">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Icons.logo className="h-6 w-6 text-primary" />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {currentYear} Volatrax Digital Services. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" size="icon">
            <Link href="https://www.youtube.com/@VOLATRAX" target="_blank" rel="noopener noreferrer" aria-label="YouTube Channel">
                <Youtube className="h-6 w-6" />
            </Link>
          </Button>
          <Button asChild variant="ghost" size="icon">
            <Link href="https://www.tiktok.com/@volatrax?_r=1&_t=ZS-91MnuPXWIgZ" target="_blank" rel="noopener noreferrer" aria-label="TikTok Profile">
                <TikTokIcon />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
