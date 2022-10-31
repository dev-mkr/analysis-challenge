/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "rgb(var(--color-primary) / <alpha-value> )",
      },
      textColor: {
        base: "rgb(var(--color-text-base) / <alpha-value> )",
      },
    },
  },
  plugins: [],
};
