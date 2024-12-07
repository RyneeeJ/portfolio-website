/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        gray: {
          darkest: "#222",
          dark: "#3a3a3a",
          medium: "#888",
          light: "#d9d9d9",
        },
        offWhite: "#f6f6f6",
        green: {
          brand: "#c6de41",
        },
      },
    },
  },
  plugins: [],
};
