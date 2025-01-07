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
        font2: '"Kanit", serif',
        font3: '"Bodoni Moda", serif',
        font4: '"Lora", serif',
        font5: '"Playwrite AU SA", serif',
      },
      animation: {
        "open": "openModal 0.5s ease-out forwards", // Adding open animation
      },
      keyframes: {
        openModal: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
}
