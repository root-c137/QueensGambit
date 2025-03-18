import colors from 'tailwindcss/colors';

module.exports = {
  theme: {
    '--color-custom-red': colors.red,
    extend: {
      colors: {
        '--color-custom-red': colors.black,
        '--custom-green': '#34D399',
      },
      fontFamily: {
        sans: ['Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
