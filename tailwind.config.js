/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FEF7EC',
          100: '#FDEFD9',
          200: '#FBDFB3',
          300: '#F9CF8D',
          400: '#F7B44D',
          500: '#F6A827',
          600: '#E89509',
          700: '#B27307',
          800: '#7C5005',
          900: '#462D03',
        },
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
}
