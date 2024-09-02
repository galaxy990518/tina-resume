/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#908982',
        secondary: '#CADBD4',
        accent: '#CADBD4',
        text: '#664A3D',
        background: '#fffffe'
      },
      fontFamily: {
        pacifico: ['Pacifico', 'sans-serif'],
        Ubuntu: ['Ubuntu', 'sans-serif'],
        NotoJP: ['Noto Sans JP', 'sans-serif']
      }
    }
  },
  plugins: []
};
