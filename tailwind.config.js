/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: "#42B883",
        secondary: "#35495E",
        neutral: "#F7F9FA",
      },
      // use Roboto Font
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1.5rem",
          lg: "4rem",
          xl: "4rem",
          "2xl": "4rem",
        },
        screens: {
          sm: "576px",
          md: "768px",
          lg: "992px",
          xl: "1200px",
          "2xl": "1400px",
        },
      },
    },
  },
  plugins: [],
};
