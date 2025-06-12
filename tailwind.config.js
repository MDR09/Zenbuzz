/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'zen-brown': {
          50: '#faf7f2',
          100: '#f4ede0',
          200: '#e8d7c0',
          300: '#d9bb96',
          400: '#c79a6a',
          500: '#ba824d',
          600: '#ac6f41',
          700: '#8f5838',
          800: '#744733',
          900: '#5e3b2b',
        },
        'zen-beige': {
          50: '#fefcf8',
          100: '#fdf7ed',
          200: '#faecd4',
          300: '#f6dbb1',
          400: '#f0c584',
          500: '#e8a855',
          600: '#d68f3a',
          700: '#b3752f',
          800: '#90602a',
          900: '#744f26',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'rotate-slow': 'rotate 20s linear infinite',
        'fizz': 'fizz 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'fade-in': 'fadeIn 1s ease-out',
        'parallax': 'parallax 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fizz: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1) rotate(5deg)' },
          '100%': { transform: 'scale(1)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        parallax: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50px)' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'zen-gradient': 'linear-gradient(135deg, #f0c584 0%, #ba824d 100%)',
      },
    },
  },
  plugins: [],
};