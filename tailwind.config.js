/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          primary: "#5D6D7E",
          secondary: "#D4AC0D",
          accent: "#2E8B57",
          background: "#F5F5F5",
          txt: "#333333",
        },
        dark: {
          primary: "#1F1F1F",
          secondary: "#FFA500",
          accent: "#00CED1",
          background: "#121212",
          txt: "#FFFFFF ",
        },
      },
    },
  },
  plugins: [],
};
