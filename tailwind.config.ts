import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        mustard: '#C4956A',
        teal: '#2D5F3F',
        cream: '#FAF5EE',
        charcoal: '#2C2C2C',
        terracotta: '#B87456',
        purple: '#6B5B7B',
      },
      boxShadow: {
        glow: '0 20px 60px -30px rgba(196, 149, 106, 0.55)',
      },
    },
  },
  plugins: [],
};

export default config;
