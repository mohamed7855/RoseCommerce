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
  },
  plugins: [],
};
