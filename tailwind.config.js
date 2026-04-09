/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#075232',
          foreground: '#ffffff',
        },
        background: '#f6f8f7',
        surface: '#ffffff',
        slate: {
          900: '#0f172a',
          500: '#64748b',
        }
      },
      fontFamily: {
        display: ['Plus Jakarta Sans', 'sans-serif'],
        sans: ['Work Sans', 'sans-serif'],
      },
      borderRadius: {
        lg: '8px',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      opacity: {
        10: '0.1',
        20: '0.2',
        5: '0.05',
      }
    },
  },
  plugins: [],
}
