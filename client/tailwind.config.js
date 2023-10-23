/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'negro': '#373234',
        'plomo': '#c8d7d2',
        'gris': '#f4f2f0',
        'rojo': '#d84339',
      },
    },
  },
  plugins: [],
}

