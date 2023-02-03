/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xs':'480px',
        // => @media (max-width: 640px) { ... }
        'sm': '640px',
        // => @media (max-width: 640px) { ... }
  
        'md': '768px',
        // => @media (max-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (max-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (max-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (max-width: 1536px) { ... }
      }
    },
  },
  plugins: [],
}