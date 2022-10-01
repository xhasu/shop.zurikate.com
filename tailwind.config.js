/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#BAFF00",
      }, 
      fontFamily: {
        "century": ["CenturyGothic", "sans-serif"],
        "object": ["ObjectSans", "sans-serif"],
      }
    },
  },
  plugins: [],
}
