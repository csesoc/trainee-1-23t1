/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'theme-yellow': '#EEBE6F',
        'theme-red': '#F28482',
        'theme-pink': '#EECCC5',
        'theme-blue': '#84A59D',
        'theme-white': '#F7EDE2'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
};
