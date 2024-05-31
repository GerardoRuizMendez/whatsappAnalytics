/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#075E54",
        secondary: "#049382",
        custom_white: "#ECECEC",
        button: "#0F2F2B",
        darker_button: "#0c2523",
        custom_yellow: "#eab209",
      },
    },
  },
  plugins: [],
};
