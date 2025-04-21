/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}", // Watch all frontend files
    ],
    theme: {
      extend: {
        colors: {
          guardian: {
            DEFAULT: '#6b21a8', // Purple glow
            dark: '#4c1d95',
            light: '#a855f7',
          },
        },
        fontFamily: {
          inter: ['Inter', 'sans-serif'],
        },
        boxShadow: {
          glow: '0 0 10px rgba(107, 33, 168, 0.7)',
        },
      },
    },
    plugins: [],
  }
  