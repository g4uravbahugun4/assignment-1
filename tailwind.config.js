/** @type {import('tailwindcss').Config} */
module.exports = {
 
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      screens: {
        '2xl': { 'max': '1535px' },
        // => @media (max-width: 1535px) { ... }

        'xl': { 'max': '1279px' },
        // => @media (max-width: 1279px) { ... }

        'lg': { 'max': '1023px' },
        // => @media (max-width: 1023px) { ... }

        'md': { 'max': '767px' },
        // => @media (max-width: 767px) { ... }

        'sm': { 'max': '639px' },
        // => @media (max-width: 639px) { ... }



        'lx2': { 'min': '1535px' },
        // => @media (min-width: 1535px) { ... }

        'lx': { 'min': '1279px' },
        // => @media (min-width: 1279px) { ... }

        'gl': { 'min': '1023px' },
        // => @media (min-width: 1023px) { ... }

        'dm': { 'min': '767px' },
        // => @media (min-width: 767px) { ... }

        'ms': { 'min': '639px' },
        // => @media (min-width: 639px) { ... }
      },
    },
  },
  plugins: [],
}
