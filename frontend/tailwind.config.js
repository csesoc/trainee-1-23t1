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
        'theme-white': '#F7EDE2',
        'theme-black': '#222222',
        'theme-lPink': '#EECCC5',
        'theme-dPink': '#F28482',
        'theme-cream': '#ECDAC3',
        'alt-green': '#70A646',
        'alt-blue': '#468FA6',
        'alt-yellow': '#E9B653',
        'alt-pink': '#E95377',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
};
