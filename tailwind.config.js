/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('./images/bg.png')",
      },
      colors: {
        'primary': '#1D0306',
        'secondary': '#9A4E44',
      },
      fontFamily: {
        'prompt': ['MyPrompt', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      fontSize: {
        'hero': '150px',
      },
      rotate: {
        '360': '360deg',
      }
    },
  },
  plugins: [],
}