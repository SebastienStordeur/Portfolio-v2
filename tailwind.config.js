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
    extend: {
      fontSize: {
        h1: "clamp(32px, 8vw, 63px)",
        dynamic: "clamp(24px, 8vw, 32px)"
      }
    },
    colors : {
      background: '#16212c',
      primary: "#f4d35e",
      primarytransparent: "rgba(var(--transparent-primary) / <alpha-value>)",
      white: "#fff",
      lightnavy: "#112240",
      lightgray: "#a8b2d1"
    }
  },
  plugins: [],
}
