/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors : {
      background: '#16212c',
      primary: "#f4d35e",
      primarytransparent: "rgba(244, 211, 94, 0.1)",
      white: "#fff"
    }
  },
  plugins: [],
}
