/** @type {import('tailwindcss').Config} */
export default {
  content: ['./views/**/*.ejs'],
  theme: {
    extend: {
      colors: {
        'gray': '#bfbfbf',
        'dark-gray': '#9CA3AF',
        'cyan': '#00a6ce',
        'dark-cyan': '#06b6d4',
        red: '#ff4c4c',
        'dark-violet': '#421d4e',
        'grayish-violet': '#3a3053',
        'very-dark-blue': '#1b1d32',
        'very-dark-violet': '#0e0f19',
      }
    }
  },
  plugins: [],
}