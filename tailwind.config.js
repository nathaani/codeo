/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'custom-purple': '#3f3cbb',
        'custom-pink': '#ec4899',
        // Define other custom colors here
      },
      borderRadius: {
        '4xl': '2rem',
        // other custom border radius
      },
      fontFamily: {
        'overpass': ['Overpass', 'sans-serif'],
        'cabin': ['Cabin', 'sans-serif'],
        'roboto-mono': ['Roboto Mono', 'monospace'],
        // other custom fonts
      },
      // Define other theme extensions here
    },
  },
  plugins: [],
};
