/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1330px",
    },
    extend: {
      colors: {
        primary: "#009b5d",
        secondary: "#002d5d",
        assent: {
          DEFAULT: "#e6fbf2",
          secondary: "#e9eaff",
          tertiary: "#90c6cd",
        },
        grey: "#e8f0f1",
      },
      fontFamily: {
        primary: "Poppins",
      },
      boxShadow: {
        custom1: " 0px 1px 5px rgba(0, 0, 0, 0.3)",
        custom2: " 0px 0px 30px  0px rgba(8 , 73 ,81 , 0.06)",
      },
    },
  },
  plugins: [],
};
