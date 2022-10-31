/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#10002B',
          800: '#240046',
          700: '#3C096C',
          600: '#5A189A',
          400: '#7B2CBF',
          300: '#9D4EDD',
          200: '#C77DFF',
          100: '#E0AAFF',
        },
        
        gray: {
          900: '#202225',
          800: '#2f3136',
          700: '#36393f',
          600: '#4f545c',
          400: '#d4d7dc',
          300: '#e3e5e8',
          200: '#ebedef',
          100: '#f2f3f5',
        },
      }
    },
  },
  plugins: [],
}
