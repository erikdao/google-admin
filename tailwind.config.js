module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['DM Sans', 'sans-serif'],
      'body': ['DM Sans'],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}