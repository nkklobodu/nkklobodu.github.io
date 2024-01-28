/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./dist/**/*.{html,js}"],
  content: [
    "./index.html",     // Your root HTML file
    "./assets/js/*.js", // All JS files in assets/js directory
    "./pages/**/*.html" // All HTML files in pages directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

