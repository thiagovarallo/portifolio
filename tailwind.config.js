/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
        "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor : {
        "primary" : "#4831d4",
        "secundary" : "#ccf381"
      },
      fontFamily : {
        'Inter' : 'Inter',
        'Montserrat' : 'Montserrat'
      },
      textColor : {
        "primary" : "#4831d4",
        "secundary" : "#ccf381"
      },
    },
  },
  plugins: [],
}

