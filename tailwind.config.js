module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // false or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#F8A1D1',
        secundary: '#E36BAE',
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
