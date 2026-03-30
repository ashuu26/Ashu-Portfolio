import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-manrope)', ...defaultTheme.fontFamily.sans],
        display: ['var(--font-space)', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        ink: '#0f172a',
        night: '#0a0f1f',
        cloud: '#e2e8f0',
        mist: '#94a3b8',
        aurora: '#6ad3ff',
        pulse: '#8b5cf6',
        ember: '#f97316',
        jade: '#22d3ee'
      },
      boxShadow: {
        glow: '0 20px 80px rgba(108, 166, 255, 0.25)',
        card: '0 18px 60px rgba(15, 23, 42, 0.35)'
      },
      backgroundImage: {
        mesh: 'radial-gradient(circle at 20% 20%, rgba(138, 92, 246, 0.18), transparent 25%), radial-gradient(circle at 80% 0%, rgba(34, 211, 238, 0.20), transparent 30%), radial-gradient(circle at 50% 80%, rgba(249, 115, 22, 0.2), transparent 28%)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
