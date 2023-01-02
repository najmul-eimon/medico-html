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
      "3xl": "1820px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "16px",
        sm: "16px",
        lg: "12px",
        xl: "12px",
        "2xl": "12px"
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
        'secondary-text': '#4A5567',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'mulish': ['Mulish', 'sans-serif'],
      },
      backgroundImage: {
        'hero-image': "url('/src/images/banner.jpg')",
        'map-image': "url('/src/images/map.png')",
      }
    },
  },
  plugins: [],
}