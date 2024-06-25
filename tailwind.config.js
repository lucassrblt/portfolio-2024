/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito Sans", "sans-serif"],
      },
      colors: {
        'primary-white': '#FFFFFF',
        'primary-black':'#1E1E1E',
        'secondary-black':'#444444',
        'light-grey' : 'rgba(68, 68, 68, 0.4)',
        'primary-purple' : '#9F63FF',
        'primary-yellow' : '#FEEE63'
      }
    },
  },
  plugins: [],
  darkMode: 'selector'
}

