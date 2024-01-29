/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backdropFilter: {
        '2xl': 'blur(2xl)',
      },
    },
  },
  plugins: [
    require('tailwindcss-filters'), 
  ],
};
