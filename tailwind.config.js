/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        theme: {
          light: "#E9ECFF",
          dark: "#808BFE",
        },
      },
    },
  },
  plugins: [],
};
