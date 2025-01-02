/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Yaha custom color define karein
        primary: '#d6e6ff', // Example: Dark blue shade
        secondary: '#c54628', // Example: Purple shade
        textcolor: '#2d2926', // Example: Amber shade
      },
      fontFamily: {
        navfont: '"Kanit", serif',
      }
    },
  },
  plugins: [],
}
