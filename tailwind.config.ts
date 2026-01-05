import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // 👇 1. Add your Semantic Colors here
      colors: {
        header: {
          DEFAULT: 'var(--color-header)', // text-header, bg-header
          accent: 'var(--color-header-accent)', // text-header-accent
        },
        body: 'var(--color-body)', // text-body
        tag: 'var(--color-tag)', // bg-tag, text-tag
        primary: 'var(--color-primary)', // bg-primary
        nav: 'var(--color-nav)', // text-nav
      },

      // 👇 2. Keep your Layout Spacing
      padding: {
        relaxed: 'var(--padding-x-relaxed)',
        tight: 'var(--padding-x-tight)',
        navbar: 'var(--padding-y-navbar)',
        hero: 'var(--padding-y-hero)',
      },
      spacing: {
        relaxed: 'var(--padding-x-relaxed)',
        tight: 'var(--padding-x-tight)',
        navbar: 'var(--padding-y-navbar)',
        hero: 'var(--padding-y-hero)',
      },

      // 👇 3. Keep your Typography
      fontSize: {
        // Usage: className="text-h1"
        h1: ['var(--text-h1-size)', { lineHeight: 'var(--text-h1-height)' }],
        h2: ['var(--text-h2-size)', { lineHeight: 'var(--text-h2-height)' }],
        h3: ['var(--text-h3-size)', { lineHeight: 'var(--text-h3-height)' }],
        'body-lg': [
          'var(--body-lg-size)',
          { lineHeight: 'var(--body-lg-height)' },
        ],
      },
    },
  },
  plugins: [],
};
export default config;
