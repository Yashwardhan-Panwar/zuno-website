/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'zuno-primary': '#1CBBB4',
        'zuno-secondary': '#14A79D', 
        'zuno-dark': '#1F3A3C',
        'zuno-light': '#E6F7F6',
      }
    },
  },
  plugins: [],
}
