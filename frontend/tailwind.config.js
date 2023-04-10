/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      yellow: '#f6bd60',
      white: '#f7ede2',
      lpink: '#f5cac3',
      blue: '#84a59d',
      pink: '#f28482',
    },
    extend: {},
  },
  plugins: [],
};
