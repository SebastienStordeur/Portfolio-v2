/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'default': ['Montserrat', 'sans-serif']
    },
    extend: {},
    colors : {
      background: '#0a192f',
      primary: "#f4d35e",
      primarytransparent: "rgba(var(--transparent-primary) / <alpha-value>)",
      white: "#fff",
      lightnavy: "#112240",
      lightgray: "#a8b2d1"
    }
  },
  plugins: [],
}
