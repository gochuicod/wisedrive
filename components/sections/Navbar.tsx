'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';

import { AppButton } from '@/components/AppButton';
import { CircleCheck } from 'lucide-react';

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';

import { NAV_LINKS } from '@/constants';

export default function Navbar() {
  const t = useTranslations('Navigation');
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="lg:px-relaxed px-tight py-navbar flex flex-row justify-between items-center sticky top-0 z-50 bg-white">
      {/* 1. LOGO (Always Visible) */}
      <Link href="/">
        <Image
          src="/logo_wisedrive.webp"
          alt="WiseDrive Logo"
          width={140}
          height={42}
          priority
          className="w-[120px] md:w-[167px] h-auto"
        />
      </Link>

      {/* 2. DESKTOP MENU (Hidden on Mobile/Tablet) */}
      <div className="hidden lg:flex flex-row items-center gap-8">
        {NAV_LINKS.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.key}
              href={link.href}
              className={`text-h6 ${isActive ? 'font-bold' : 'font-normal'}`}
            >
              {t(link.label)}
            </Link>
          );
        })}
        <AppButton
          variant="default"
          size="sm"
          leftIcon={<CircleCheck className="size-4" />}
        >
          {t('inspect_with_confidence_button')}
        </AppButton>
      </div>

      {/* 3. MOBILE MENU (Visible only on Mobile/Tablet) */}
      <div className="flex lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button className="p-2 text-header">
              {/* Hamburger Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#193CB8"
                className="md:size-6 size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </SheetTrigger>

          <SheetContent side="right" className="w-[300px] sm:w-[350px]">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <SheetDescription className="sr-only">
              Mobile navigation links
            </SheetDescription>

            <div className="flex flex-col gap-6 mt-10">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.key}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-h6 ${isActive ? 'font-bold' : 'font-normal'}`}
                  >
                    {t(link.label)}
                  </Link>
                );
              })}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
