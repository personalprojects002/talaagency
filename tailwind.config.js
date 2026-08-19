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
        dark: {
          bg: '#08080C',
          surface: '#12121A',
          card: '#1A1A26',
          border: 'rgba(255, 255, 255, 0.08)'
        },
        brand: {
          blue: '#3B82F6',
          cyan: '#06B6D4',
          purple: '#8B5CF6',
          rose: '#F43F5E',
          orange: '#F97316'
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-hero': 'linear-gradient(135deg, #0A0A10 0%, #111827 50%, #0F172A 100%)',
        'gradient-glow': 'radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.2) 0%, transparent 70%)',
        'gradient-card': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
      },
      boxShadow: {
        'glow-blue': '0 0 40px -10px rgba(59, 130, 246, 0.5)',
        'glow-purple': '0 0 40px -10px rgba(139, 92, 246, 0.5)',
        'glow-cyan': '0 0 40px -10px rgba(6, 182, 212, 0.5)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulseSlow 4s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};
