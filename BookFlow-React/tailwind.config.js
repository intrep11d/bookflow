/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'screen-sm': '1440px'
      },
      backgroundImage: {
        'login-bg': "url('./assets/login-bg.jpg')",
      }
    },
  },
  plugins: [],
}

