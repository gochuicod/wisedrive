import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './styles/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        wdBlue: 'var(--color-wd-blue)',
        wdOrange: 'var(--color-wd-orange)',
        header: {
          DEFAULT: 'var(--color-header)',
          accent: 'var(--color-header-accent)',
        },
        body: 'var(--color-body)',
        tag: 'var(--color-tag)',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        nav: 'var(--color-nav)',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      padding: {
        relaxed: 'var(--padding-x-relaxed)',
        tight: 'var(--padding-x-tight)',
        navbar: 'var(--padding-y-navbar)',
        footer: 'var(--padding-y-footer)',
        hero: 'var(--padding-y-hero)',
      },
      spacing: {
        relaxed: 'var(--padding-x-relaxed)',
        tight: 'var(--padding-x-tight)',
        navbar: 'var(--padding-y-navbar)',
        footer: 'var(--padding-y-footer)',
        hero: 'var(--padding-y-hero)',
      },
      fontSize: {
        h1: [
          'var(--text-h1-size)',
          {
            lineHeight: 'var(--text-h1-height)',
          },
        ],
        h2: [
          'var(--text-h2-size)',
          {
            lineHeight: 'var(--text-h2-height)',
          },
        ],
        h3: [
          'var(--text-h3-size)',
          {
            lineHeight: 'var(--text-h3-height)',
          },
        ],
        h4: [
          'var(--text-h4-size)',
          {
            lineHeight: 'var(--text-h4-height)',
          },
        ],
        h5: [
          'var(--text-h5-size)',
          {
            lineHeight: 'var(--text-h5-height)',
          },
        ],
        h6: [
          'var(--text-h6-size)',
          {
            lineHeight: 'var(--text-h6-height)',
          },
        ],
        'body-lg': [
          'var(--body-lg-size)',
          {
            lineHeight: 'var(--body-lg-height)',
          },
        ],
        'body-md': [
          'var(--body-md-size)',
          {
            lineHeight: 'var(--body-md-height)',
          },
        ],
        'body-sm': [
          'var(--body-sm-size)',
          {
            lineHeight: 'var(--body-sm-height)',
          },
        ],
        caption: [
          'var(--caption-size)',
          {
            lineHeight: 'var(--caption-height)',
          },
        ],
        tagText: [
          'var(--tag-size)',
          {
            lineHeight: 'var(--tag-height)',
            letterSpacing: 'var(--tag-letter-spacing)',
          },
        ],
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        caption: ['var(--font-caption)', 'sans-serif'],
        gilroy: ['var(--font-gilroy)', 'sans-serif'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
