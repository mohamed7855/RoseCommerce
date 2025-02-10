/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        mainBg: '#F82BA9',
        secondBg: '#FEEDF7',
        thirdBg: '#8C52FF',
        mainText: '#160E4B',
        secondText: '#757F95',
        thirdText: '#F05454',
        fourthText: '#DEE2E6'
      }
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [],
};