import Link from 'next/link';
import { Menu } from 'lucide-react';

import { Icons } from '@/components/icons';
import MainNav from '@/components/layout/main-nav';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const navItems = [
  { title: 'Home', href: '/' },
  { title: 'Account Management', href: '/account-management' },
  { title: 'Courses', href: '/courses' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Icons.logo className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline">Volatrax</span>
        </Link>
        <div className="hidden md:flex flex-1 items-center justify-end">
          <MainNav items={navItems} />
        </div>
        <div className="flex flex-1 items-center justify-end md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>
                  <Link href="/" className="flex items-center space-x-2">
                    <Icons.logo className="h-6 w-6 text-primary" />
                    <span className="font-bold font-headline">Volatrax</span>
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <div className="mt-4">
                <MainNav items={navItems} isMobile />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
