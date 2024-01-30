/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'bg1' : "url('/src/Assets/bg.webp')",
      },
      colors: {
        text: "#f9f9f9",
        secondarytext: "#93899a",
        primary: "#5918df",
        secondary: "#302A4B",
        accent: "#7F7D83",
        primaryaccent: "#4F30E1",
        bg:"#191526",
        bg2:"#0f0d15",
        green: "#24dc38",
        light_green: "#22d38b",
        yellow: "#dfef32",
      },
    },
  },
  plugins: [],
};
