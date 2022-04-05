module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    typography: (theme) => ({}),
    extend: {},
  },
  plugins: [
    require("flowbite/plugin"),
    require("@tailwindcss/typography"),
    require("tw-elements/dist/plugin"),
  ],
};
