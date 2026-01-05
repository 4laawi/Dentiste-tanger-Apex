/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./App.tsx",
    "./index.tsx",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cyan: '#6AE0F2',
          teal: '#1395B3',
          dark: '#005163',
          accent: '#E6F9FB'
        }
      },
      fontFamily: {
        serif: ['Amiri', 'serif'],
        sans: ['Sen', 'sans-serif'],
        work: ['Work Sans', 'sans-serif'],
        karla: ['Karla', 'sans-serif']
      }
    },
  },
  plugins: [],
}
