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
        'secondary-white': '#FAFAFA',
        'primary-black':'#1E1E1E',
        'secondary-black':'#444444',
        'third-black' : '#8D8D8D',
        'light-grey' : 'rgba(68, 68, 68, 0.4)',
        'very-light-grey': '#EAEAEA',
        'primary-purple' : '#7131FF',
        'primary-yellow' : '#FEEE63',
        'linkedin-blue' : '#0A66C2',
        'sticky-cursor': "#BAAFFF",
        'light-green': "#DDFF96",
        'light-orange': "#FFB978"
      }
    },
  },
  plugins: [],
  darkMode: 'selector'
}

