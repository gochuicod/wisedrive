import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    "./styles/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // 👇 1. Semantic Colors
      colors: {
        header: {
          DEFAULT: 'var(--color-header)', 
          accent: 'var(--color-header-accent)',
        },
        body: 'var(--color-body)',
        tag: 'var(--color-tag)', 
        primary: 'var(--color-primary)', 
        nav: 'var(--color-nav)',
      },

      // 👇 2. Layout Spacing
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

      // 👇 3. Typography Mappings
      fontSize: {
        // Headings
        h1: ['var(--text-h1-size)', { lineHeight: 'var(--text-h1-height)' }],
        h2: ['var(--text-h2-size)', { lineHeight: 'var(--text-h2-height)' }],
        h3: ['var(--text-h3-size)', { lineHeight: 'var(--text-h3-height)' }],
        h4: ['var(--text-h4-size)', { lineHeight: 'var(--text-h4-height)' }],
        h5: ['var(--text-h5-size)', { lineHeight: 'var(--text-h5-height)' }],
        h6: ['var(--text-h6-size)', { lineHeight: 'var(--text-h6-height)' }],
        
        // Body Text
        'body-lg': ['var(--body-lg-size)', { lineHeight: 'var(--body-lg-height)' }],
        'body-md': ['var(--body-md-size)', { lineHeight: 'var(--body-md-height)' }],
        'body-sm': ['var(--body-sm-size)', { lineHeight: 'var(--body-sm-height)' }],
        
        // UI Elements
        caption: ['var(--caption-size)', { lineHeight: 'var(--caption-height)' }],
        tag: ['var(--tag-size)', { lineHeight: 'var(--tag-height)', letterSpacing: 'var(--tag-letter-spacing)' }],
      },

      // 👇 4. Fonts (Ensuring your variables work)
      fontFamily: {
        heading: ['var(--font-heading)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        caption: ['var(--font-caption)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;