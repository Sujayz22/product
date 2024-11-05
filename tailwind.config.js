/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cs1: '#E2E1E1', 
        cs2r: '#595959', 
        btn1: '#0076DF',
      },
      fontFamily: {
        Crimson: ['"Crimson Text"', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}