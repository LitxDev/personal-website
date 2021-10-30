const colors = require("tailwindcss/colors")

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
      xxl: "2560",
    },
    extend: {},
    colors: {
      transparent: "transparent",
      background: colors.coolGray,
      foreground: colors.blueGray,
      accent: colors.blue,
    },
    fontFamily: {
      roboto: ["'Roboto'", "sans-serif"],
      lato: ["'Lato'", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
