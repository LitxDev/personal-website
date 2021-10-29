const colors = require("tailwindcss/colors")

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        "spin-fast": "spin 0.5s linear 1",
      },
    },
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
    extend: {
      animation: ["hover", "focus"],
    },
  },
  plugins: [],
}
