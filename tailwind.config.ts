import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-light': 'var(--color-primary-light)',
        'primary-dark': 'var(--color-primary-dark)',
        'secondary-light': 'var(--color-secondary-light)',
        'gray': 'var(--color-gray)',
      },

      fontSize: {
        '2xl': 'var(--font-size-2xl)',
      },

      fontFamily: {
        sans: 'var(--font-montserrat)',
        primary: 'var(--font-primary)'
      },
      height: {
        'page-header': 'var(--page-header-height)'
      },
    },
  },
  plugins: [],
};
export default config;
