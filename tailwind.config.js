/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#5baaec',
        secondary: '#64748b',
        third: '#484cb0',
        dark: '#0f172a',
      },
      screens: {
        '2xl': '1320px'
      },
      fontFamily: {
        tiltNeon: ['Tilt Neon'],
        poppins: ['Poppins']
      },
    },
  },
  plugins: [],
}
