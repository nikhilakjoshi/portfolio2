module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        prim: '#6C63FF',
        secprim: '#FF589B',
        sec: '#69BAA5',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
