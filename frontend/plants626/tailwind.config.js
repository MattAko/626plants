const colors = require("tailwindcss/colors");

module.exports = {
  prefix: "",
  purge: {
    content: ["./src/**/*.{html,ts}"],
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        green: "#29524A",
        lightgreen: "#90ee90",
        artichoke: "#94A187",
        black: "#06070E",
        khaki: "#C5AFA0",
        pink: "#E9BCB7",
        transparent: "transparent",
        black: colors.black,
        white: colors.white,
        gray: colors.trueGray,
        indigo: colors.indigo,
        red: colors.rose,
        yellow: colors.amber,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
