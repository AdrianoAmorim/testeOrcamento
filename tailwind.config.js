/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home': "url('./src/assets/img/bg-home.svg')"
      }
    },
  },
  plugins: [],
}

