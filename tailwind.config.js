/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#030306',
          900: '#06060c',
          800: '#0b0b14',
          700: '#11111f',
        },
        surface: {
          DEFAULT: '#0b0b12',
          light: '#131320',
          border: '#1b1b2e',
        },
        accent: {
          primary: '#6366f1', // Indigo
          primaryHover: '#4f46e5',
          secondary: '#f43f5e', // Coral/Rose
          tertiary: '#10b981', // Neon Emerald
          muted: '#6b6b83',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
        serif: ['Instrument Serif', 'serif'],
        mono: ['DM Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 8s ease-in-out infinite',
        'float-slow': 'float 12s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-20px) scale(1.05)' },
        }
      }
    },
  },
  plugins: [],
}
