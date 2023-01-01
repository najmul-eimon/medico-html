// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*", "./pages/*html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1536px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "12px",
      },
      screens: {
        '2xl' : '1320px'
      }
    },
    extend: {
      colors: {
        'primary': '#37D6C9',
        'primary-alt': '#32C3B8',
        'secondary': '#045AB5',
        'primary-text': '#00201D',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'mulish': ['Mulish', 'sans-serif'],
      },
      backgroundImage: {
        'hero-image': "url('/src/images/banner.jpg')",
      }
    },
  },
  plugins: [],
}