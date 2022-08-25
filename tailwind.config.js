/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "component-dark-bg": "#17181B",
        "component-white-bg": "#F7F7F7",
        "nav-active-bg": "#202124",
        "light-gray-font": "#95B3CD",
        "light-dark-font": "#231F20",
        "gray-font": "#637381",
        "black-bg": "#050405",
        "dark-shadow-color": "#63738175",
        "btn-color": "#564FB1",
      },
    },
  },
  plugins: [],
};
