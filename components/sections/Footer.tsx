import { cn } from '@/lib/utils';
import { Instagram, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { FOOTER_LINKS } from '@/constants';
import Link from 'next/link';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <div
      className={cn(
        'bg-gradient-to-r from-[#122D7B] to-[#171F51]',
        'min-h-[419px]',
        'px-relaxed',
        'py-footer',
      )}
    >
      <div
        className={cn('flex flex-col', 'justify-center items-center', 'gap-8')}
      >
        {/* Top section */}
        <div
          className={cn(
            'flex lg:flex-row flex-col',
            'lg:justify-between items-center',
            'w-full',
          )}
        >
          {/* White logo on left side */}
          <Image
            src="/logo_wisedrive_white.webp"
            alt="Wisedrive logo white"
            width={200}
            height={60}
          />
          {/* Socials and address on right side */}
          <div
            className={cn(
              'flex lg:flex-row flex-col',
              'lg:gap-8',
              'justify-end items-center',
              'mt-4',
            )}
          >
            {/* Socials */}
            <div className={cn('flex flex-row', 'gap-4')}>
              <Instagram color="white" className="size-6" />
              <Linkedin color="white" className="size-6" />
              <Twitter color="white" className="size-6" />
              {/* WhatsApp Icon */}
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp Icon"
                width={24}
                height={24}
              />
            </div>
            {/* Address */}
            <span
              className={cn(
                'lg:w-[45%] md:w-[70%] w-full',
                'text-[#D6E1F9]',
                'font-normal',
                'font-gilroy',
                'text-lg',
                'mt-4',
                'lg:text-start md:text-center text-start',
              )}
            >
              {t('address')}
            </span>
          </div>
        </div>
        {/* Middle section */}
        <div
          className={cn(
            'flex',
            'md:flex-row flex-col',
            'gap-8',
            'justify-between items-start',
            'font-body',
            'w-full',
          )}
        >
          {/* First Column */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div
              key={category}
              className={cn(
                'flex flex-col',
                'gap-2',
                'lg:w-[288px] w-[162px] w-full',
                'lg:min-h-[158px] min-h-[95px]',
              )}
            >
              {/* Category Title (e.g., Products) */}
              <h4
                className={cn(
                  'text-tag',
                  'font-bold',
                  'tracking-tight',
                  'text-tag-style',
                )}
              >
                {t(category)}
              </h4>

              {/* List of Links */}
              <ul className={cn('flex flex-col', 'gap-2')}>
                {links.map((link) => (
                  <li key={link.key}>
                    <Link
                      href={link.href}
                      className={cn(
                        'text-[#D6E1F9]',
                        'text-sm',
                        'hover:text-white',
                        'transition-colors',
                        'cursor-pointer',
                        'font-normal',
                      )}
                    >
                      {/* Use the key from constants to look up the translation */}
                      {t(link.key)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* --- BOTTOM ROW: Copyright --- */}
        <div
          className={cn(
            'w-full',
            'pt-6',
            'flex',
            'justify-center',
            'mt-4',
            'border-t border-[#5F85DC]',
          )}
        >
          <p
            className={cn(
              'text-sm',
              'text-white',
              'font-normal',
              'font-gilroy',
              'text-center',
            )}
          >
            {t('copyright', { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </div>
  );
}
