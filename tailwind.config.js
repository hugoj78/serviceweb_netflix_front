module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
    './public/index.html'
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio'), require('@tailwindcss/forms')],
}
