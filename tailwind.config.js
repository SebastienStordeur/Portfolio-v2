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
        dynamic: "clamp(24px, 8vw, 32px)",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
    },
    colors: {
      background: "#16212c",
      primary: "#f4d35e",
      white: "#fff",
      darkgray: "#25353E",
      rederror: "#F52826",
    },
  },
  plugins: [],
};
