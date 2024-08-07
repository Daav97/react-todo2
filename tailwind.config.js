/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: "class", //Activando esta deja de detectar la preferencia del SO automaticamente.
};
