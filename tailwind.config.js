/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "Krona One, sans-serif",
      },
      fontSize: {
        xs: "12px",
      },
    },
  },
  plugins: [],
};
