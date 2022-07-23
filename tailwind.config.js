/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      fontSize: {
        h1: "clamp(32px, 8vw, 63px)",
        dynamic: "clamp(24px, 8vw, 32px)"
      },
      fontFamily: {
        'Montserrat': ['Montserrat', 'sans-serif']
      },
    },
    colors : {
      background: '#16212c',
      primary: "#f4d35e",
      primarytransparent: "rgba(var(--transparent-primary) / <alpha-value>)",
      white: "#fff",
      lightbg: "#5F9EA0",
      lightgray: "#a8b2d1",
      beige: "#F5F5DC",
      test: "#96e8eb"
    }
  },
  plugins: [],
}

/* 96e8eb */