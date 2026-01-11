'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl'; // Added useLocale
import { Link, usePathname, useRouter } from '@/i18n/routing';

import { AppButton } from '@/components/AppButton';
import { DropdownButton } from '@/components/DropdownButton';

import { CircleCheck, HeartHandshake } from 'lucide-react';

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';

import { NAV_LINKS } from '@/constants';
import { cn } from '@/lib/utils';
import { WisedriveLogo } from '../icons/WiseDriveLogo';

export default function Navbar() {
  const t = useTranslations('Navigation');
  const locale = useLocale(); // Get current locale
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Map locale codes to display labels
  const localeLabels: Record<string, string> = {
    en: 'EN',
    my: 'BM',
  };

  const languageItems = [
    {
      label: 'English',
      onClick: () => router.replace(pathname, { locale: 'en' }),
    },
    {
      label: 'Bahasa Melayu',
      onClick: () => router.replace(pathname, { locale: 'my' }),
    },
  ];

  return (
    <nav
      className={cn(
        'px-relaxed py-navbar',
        'flex flex-row',
        'justify-between items-center',
        'sticky top-0 z-50',
        'bg-white',
      )}
    >
      {/* 1. LOGO (Always Visible) */}
      <Link href="/" className="relative block w-32 lg:w-40 shrink-0">
        <WisedriveLogo className={cn('text-[#003CC5]', 'w-full h-auto')} />
      </Link>

      {/* 2. DESKTOP MENU (Hidden on Mobile/Tablet) */}
      <div
        className={cn('hidden', 'lg:flex flex-row', 'items-center', 'gap-8')}
      >
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
        <div className="flex flex-row gap-4">
          <AppButton
            variant="default"
            size="sm"
            leftIcon={<CircleCheck className="size-4" />}
          >
            {t('inspect_with_confidence_button')}
          </AppButton>
          <AppButton
            variant="tertiary"
            size="sm"
            leftIcon={<HeartHandshake className="size-4" />}
          >
            {t('partner_with_us_button')}
          </AppButton>

          {/* UPDATED DROPDOWN BUTTON */}
          <DropdownButton
            variant="tertiary"
            size="sm"
            items={languageItems}
            menuAlign="right"
          >
            {/* Dynamic Label based on current locale */}
            {localeLabels[locale] || 'EN'}
          </DropdownButton>
        </div>
      </div>

      {/* 3. MOBILE MENU (Visible only on Mobile/Tablet) */}
      <div className="flex lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button className="p-2 text-header">
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

            <div className={cn('flex flex-col', 'gap-6 mt-10', 'text-center')}>
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
              <AppButton
                variant="default"
                size="sm"
                leftIcon={<CircleCheck className="size-4" />}
              >
                {t('inspect_with_confidence_button')}
              </AppButton>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
