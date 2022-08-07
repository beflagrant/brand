/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,md,liquid,erb,serb,rb}',
    './frontend/javascript/**/*.js',
  ],
  theme: {
    colors: {
      'transparent': 'transparent',
      'white': '#FFFFFF',
      'neutral': '#F4F3EF',
      'pink': '#F9E5E5',
      'yellow': '#F6E548',
      'red': '#EA5C42',
      'black': '#000000',
    },
    fontFamily: {
      'tablet-gothic': '"Tablet Gothic"',
      'roboto-mono': '"Roboto Mono"',
    },
    extend: {
    },
  },
  plugins: [],
}
