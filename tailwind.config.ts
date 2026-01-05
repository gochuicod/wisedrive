import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // 1. Layout Spacing
      padding: {
        relaxed: 'var(--padding-x-relaxed)',
        tight: 'var(--padding-x-tight)',
        navbar: 'var(--padding-y-navbar)',
        hero: 'var(--padding-y-hero)',
      },

      // 2. Typography
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
