/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        cyan: 'hsl(180, 66%, 49%)',
        lightCyan: 'hsl(180, 66%, 70%)',
        darkViolet: 'hsl(257, 27%, 26%)',
        red: 'hsl(0, 87%, 67%)',
        gray: 'hsl(0, 0%, 75%)',
        grayishViolet: 'hsl(257, 7%, 63%)',
        veryDarkBlue: 'hsl(255, 11%, 22%)',
        veryDarkViolet: 'hsl(260, 8%, 14%)'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      height: {
        'calc-50-minus-2rem': 'calc(50% - 2rem)'
      },
      backgroundImage: {
        'shorten-image-mobile' : 'url("./src/assets/images/bg-shorten-mobile.svg")',
        'shorten-image-desktop' : 'url("./src/assets/images/bg-shorten-desktop.svg")',
        'boost-image-mobile' : 'url("./src/assets/images/bg-boost-mobile.svg")',
        'boost-image-desktop' : 'url("./src/assets/images/bg-boost-desktop.svg")',
      }

    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.empty-content': {
          content: ''
        }
      });
    }
  ],
};

