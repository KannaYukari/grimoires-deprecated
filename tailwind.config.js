module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}','./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // false or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#DDD6FE',
        secundary: '#e1bee7',
        darkPrimary: '#B34180',
        darkSecundary: '#822659'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
