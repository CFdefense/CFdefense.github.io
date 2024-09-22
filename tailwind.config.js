/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      maxWidth: {
        '7.5xl': '105rem', // Adjust this value as needed
      },
      fontFamily: {
        myFont: ['MyFont', 'sans-serif'],
      },
      fontSize: {
        '9xl': '8rem',
      }
      
    },
  },
  plugins: [],
}