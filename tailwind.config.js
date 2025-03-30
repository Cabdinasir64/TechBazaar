/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./shop.html",
    "./deals.html",
    "./contact.html",
    "./product-overview.html",
    "./src//*.html",
    "./src//*.js"

  ],

  theme: {
    extend: {
      colors: {
        primary: "#007BFF", 
        secondary: "#FF6600", 
        darkGray: "#333333",
        lightGray: "#F8F9FA",
        accent: "#FFD700", 
        background: "#FFFFFF",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
