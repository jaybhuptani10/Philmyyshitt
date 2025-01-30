/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {screens: {
      'landscape': {'raw': '(orientation: landscape)'},
      'portrait': {'raw': '(orientation: portrait)'},
      'sm-landscape': {'raw': '(min-width: 440px) and (orientation: landscape)'},
      
    },},
  },
  plugins: [],
}

