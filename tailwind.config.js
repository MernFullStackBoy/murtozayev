/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "back": "url(./src/images/stellar-night-sky-high-definition-wallpaper-kob2tl1w2zoz2sf8.jpg)"
      },
      screens: {
        "tablet": {
          max: "900px",
          min: "500px",
        },
        "phone": {
          max: "500px"
        }
      }
    },
  },
  plugins: [],
}