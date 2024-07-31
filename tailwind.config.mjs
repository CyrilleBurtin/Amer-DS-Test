/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{mjs,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        "salomon-red": "#AF0C1E",
        "salomon-black": "#141414",
        "salomon-gray": {
          200: "#E5E5E5",
          400: "#525252"
        }
      },
      fontFamily: {
        "inter": ['inter']
      }
    }
  },
  plugins: []
}
