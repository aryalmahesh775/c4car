/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#252525",
        redBackground: "#990000",
        primaryDark: "#002A2E",
        secondary: "#FAFAFA",
        textPrimary: "#99000000",
        textPrimaryDark: "#252525",
        textSecondary: "#c8c8c8",
        borderColor: "#252525",
        bgPrimary: "#FAF5F0",
        bgSecondary: "#CFDDBB",
        bgGreen: "#D6E4E5",
        bgDisabled: "#EFEFEF",
        bgLightGreen: "#EBF1F2",
        danger: "#CC0000",
        gold: "#DD9711",
        halfBlack: "#888888",
        buttonBgGreen: "rgba(207, 221, 187, 1)",
      },
      boxShadow: {
        primary: "0px 8px 8px 2px rgba(244, 240, 236, 0.08)",
        secondary: "rgb(0 0 0 / 8%) 0px 1px 12px",
      },
      fontFamily: {
        sans: ["Open Sanas", "sans-serif"],
      },
    },
  },
  plugins: [],
};
