/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#d6e6ff',
        secondary: '#c54628',
        textcolor: '#2d2926',
      },
      fontFamily: {
        navfont: '"Kanit", serif',
        font2: '"Kanit", serif',
        font3: '"Bodoni Moda", serif',
        font4: '"Lora", serif',
        font5: '"Playwrite AU SA", serif',
        font6:'"Playfair Display", serif'
      },
      zIndex: {
        'modal': '50', // Custom z-index for modal
        'navbar-hover': '60', // Custom z-index for navigation hover
      },
      animation: {
        "open": "openModal 0.5s ease-out forwards",
      },
      keyframes: {
        openModal: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [
    
  ],
};
