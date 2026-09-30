/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Switzer', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        framercode: {
          white: 'rgb(255, 255, 255)',
          'gray-5': 'rgb(250, 250, 250)',
          'gray-10': 'rgb(247, 247, 247)',
          'gray-20': 'rgb(240, 240, 240)',
          'gray-30': 'rgb(222, 222, 222)',
          'gray-40': 'rgb(184, 184, 184)',
          'gray-50': 'rgb(130, 130, 130)',
          'gray-60': 'rgb(84, 84, 84)',
          'black-90': 'rgb(43, 43, 43)',
          black: 'rgb(0, 0, 0)',
          navy: 'rgb(15, 23, 42)',
          'navy-light': 'rgb(30, 41, 59)',
          'navy-lighter': 'rgb(51, 65, 85)',
          cream: 'rgb(255, 253, 248)',
          'cream-light': 'rgb(255, 254, 250)',
          'cream-dark': 'rgb(250, 247, 238)',
          'cream-darker': 'rgb(243, 239, 228)',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}