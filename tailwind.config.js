/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx',
          './index.html'],
  theme: {
    extend: {
      backgroundImage: {
        'desk-dark': "url('/images/bg-desktop-dark.jpg')",
        'mob-dark': "url('/images/bg-mobile-dark.jpg')",
        'desk-light': "url('/images/bg-desktop-light.jpg')",
        'mob-dark': "url('/images/bg-mobile-light.jpg')"
      },
      colors : {
        //### Light Theme
        'bright-blue': 'hsl(220, 98%, 61%)',
        'Check-Background': 'hsl(192, 100%, 67%)',
        'check-Background-2': 'hsl(280, 87%, 65%)',
        'Very-Light-Gray': 'hsl(0, 0%, 98%)',
        'Very-Light-Grayish-Blue': 'hsl(236, 33%, 92%)',
        'Light-Grayish-Blue': 'hsl(233, 11%, 84%)',
        'Dark-Grayish-Blue': 'hsl(236, 9%, 61%)',
        'Very-Dark-Grayish-Blue': 'hsl(235, 19%, 35%)',
        //### Dark Theme
        'Very-Dark-Blue': 'hsl(235, 21%, 11%)',
        'Very-Dark-Desaturated-Blue': 'hsl(235, 24%, 19%)',
        'Light-Grayish-Blue': 'hsl(234, 39%, 85%)',
        'Light-Grayish-Blue-(hover)': 'hsl(236, 33%, 92%)',
        'Dark-Grayish-Blue': 'hsl(234, 11%, 52%)',
        'Very-Dark-Grayish-Blue': 'hsl(233, 14%, 35%)',
        'Very-Dark-Grayish-Blue': 'hsl(237, 14%, 26%)'

      },
      fontFamily: {
        'josefin-sans': ["Josefin Sans",'sans-serif'],
      },
    }
  },
  plugins: [],
}