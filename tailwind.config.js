/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      colors: {
        ink: "#17211d",
        moss: "#385145",
        leaf: "#5f8f6f",
        clay: "#b16a4a",
        cream: "#f8f5ef",
        line: "#ded8ce"
      },
      boxShadow: {
        soft: "0 24px 70px rgba(23, 33, 29, 0.12)"
      }
    }
  },
  plugins: []
};
