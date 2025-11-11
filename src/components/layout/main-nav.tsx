'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

interface MainNavProps {
  items: {
    title: string;
    href: string;
  }[];
  isMobile?: boolean;
}

export default function MainNav({ items, isMobile = false }: MainNavProps) {
  const pathname = usePathname();

  if (isMobile) {
    return (
      <nav className="grid grid-flow-row auto-rows-max text-sm">
        {items.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={cn(
              'flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline',
              pathname === item.href ? 'font-bold' : 'text-muted-foreground'
            )}
          >
            {item.title}
          </Link>
        ))}
      </nav>
    );
  }

  return (
    <nav className="flex items-center gap-6 text-sm">
      {items.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname === item.href ? 'text-foreground' : 'text-muted-foreground'
          )}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
