/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        windy: {
          sky: '#38bdf8',
          electric: '#0ea5e9',
          cyan: '#06b6d4',
          dark: '#0a0f1e',
          darker: '#030712',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'fade-in-up': 'fade-in-up 0.6s ease-out',
        'glow-pulse': 'glow-pulse 2.5s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(56, 189, 248, 0.3), 0 0 60px rgba(56, 189, 248, 0.1)' },
          '50%': { boxShadow: '0 0 30px rgba(56, 189, 248, 0.5), 0 0 80px rgba(56, 189, 248, 0.2)' },
        },
      }
    },
  },
  plugins: [],
}
