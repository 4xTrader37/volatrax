import { Icons } from '@/components/icons';
import { Youtube } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
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
        </div>
      </div>
    </footer>
  );
}
