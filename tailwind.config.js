/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lume: {
          bg: '#FAF8F5',
          white: '#FFFFFF',
          charcoal: '#252321',
          rose: '#B98F98',
          champagne: '#C5A880',
          taupe: '#8C817C',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}