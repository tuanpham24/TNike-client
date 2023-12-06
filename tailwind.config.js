/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '360px',
      },
      boxShadow: {
        'around-sm': 'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px',
        'around-md': 'rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px',
      }
    },
    container: {
      center: true,
    },
    colors: {
      'black': {
        950: '#020617',
        900: '#0f172a',
        800: '#1e293b',
      },
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray' : {
        500: '#6b7280',
        400: '#9ca3af',
        300: '#d1d5db'
      },
      'white': '#fff',
      'red': {
        950: '#D71313',
        950: '#D71313',
      },
      'navy': {
        950: '#192655',
        800: '#001B79',
      },
      'pink': {
        800: '#9d174d',
        700: '#be185d',
        600: '#db2777',
        500: '#ec4899',
        400: '#f472b6',
        300: '#f9a8d4',
      }
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    animation: {
      'spin-slow': 'spin 3s linear infinite',
    }
  },
  plugins: [],
}

