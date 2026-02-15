/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
   "./app/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        "sunset-footer": 
        "linear-gradient(360deg,#D3B12A 23%,#939D58 12%,#4E8FD0 35%,#54D2DE 100%)",
    },
  },
  plugins: [],
}
}