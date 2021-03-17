module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        prim: '#6C63FF',
        secprim: '#FF589B',
        sec: '#69BAA5',
        primgreen: '#54A044',
        dang: '#E44D26',
        ligh: '#F1F1F1',
        backlight: '#faf8ff',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
