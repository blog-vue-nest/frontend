/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'raleway-700': ['Raleway-Bold', 'sans-serif'],
        'roboto-700': ['Roboto-Bold', 'sans-serif'],
        'raleway-400': ['Raleway-Regular', 'sans-serif'],
        'roboto-400': ['Roboto-Regular', 'sans-serif'],
        'roboto-500': ['Roboto-Medium', 'sans-serif'],
        'raleway-800': ['Raleway-ExtraBold', 'sans-serif'],
        'raleway-600': ['Raleway-SemiBold', 'sans-serif'],
        'raleway-500': ['Raleway-Medium', 'sans-serif'],
        'raleway-italic': ['Raleway-Italic', 'sans-serif'],
      },
      backgroundImage: {
        'contact-map': "url('./src/assets/img/contact-map.jpg')"
      }
    },
    container: {
      center: true,
    },
    screens: {
      'sm': '375px',
      '2sm': '536px', // 536
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
      '2.1xl': '1540px',
      '2.2xl': '1640px',
      '2.3xl': '1740px',
      '2.4xl': '1840px',
      '3xl': '1920px',
      '4xl': '2140px'
    },
    colors: {
      'violet': '#7C4EE4',
      'dark': '#333',
      'white': '#fff',
      'dark-gray': '#666',
      'light-gray': '#999',
    }
  },
  plugins: [],
}

