/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sociallyin: {
          blue: '#0066FF',
          darkBlue: '#0047BA',
          lightBlue: '#E6F0FF',
          cardBg: '#F4F8FE',
          cardBorder: '#C2DBFE',
          yellow: '#FFD000',
          yellowHover: '#E6BC00',
          textDark: '#0F172A',
          textMuted: '#475569',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['"League Gothic"', '"Bebas Neue"', 'sans-serif'],
        gothic: ['"League Gothic"', 'sans-serif'],
      },
      keyframes: {
        dropdown: {
          '0%': { opacity: '0', transform: 'translateY(10px) scale(0.98)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        }
      },
      animation: {
        dropdown: 'dropdown 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      }
    },
  },
  plugins: [],
};
