const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      background: colors.coolGray,
      foreground: colors.blueGray,
      accent: colors.blue,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
