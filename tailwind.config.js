/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FBF8EF',
          100: '#F6EDD3',
          200: '#EDD9A5',
          300: '#E3C46E',
          400: '#D9AF3E',
          500: '#C99A2A',
          600: '#AC7F20',
          700: '#8B651E',
          800: '#71521F',
          900: '#5E441E',
        },
        ink: {
          50: '#F7F7F7',
          100: '#EEEEEE',
          200: '#DDDDDD',
          300: '#C0C0C0',
          400: '#9A9A9A',
          500: '#7A7A7A',
          600: '#5C5C5C',
          700: '#3D3D3D',
          800: '#2A2A2A',
          900: '#1A1A1A',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Jost', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
      },
    },
  },
  plugins: [],
};
