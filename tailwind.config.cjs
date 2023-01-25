/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundColor: {
        primary: "var(--clr-bg-primary)",
        secondary: "var(--clr-bg-secondary)",
      },
      textColor: {
        primary: "var(--clr-text-primary)",
        input: "var(--clr-text-input)",
      },
    },
  },
  plugins: [],
};
