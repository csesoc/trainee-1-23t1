/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
<<<<<<< HEAD
    colors: {
      yellow: '#f6bd60',
      white: '#f7ede2',
      lpink: '#f5cac3',
      blue: '#84a59d',
      pink: '#f28482',
    },
    extend: {},
=======
    extend: {
      colors: {
        'theme-yellow': '#EEBE6F',
        'theme-red': '#F28482',
        'theme-pink': '#EECCC5',
        'theme-blue': '#84A59D',
        'theme-white': '#F7EDE2'
      }
    },
>>>>>>> auth
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
};
