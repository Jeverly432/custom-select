/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsla(120, 100% ,25%,1)",
        secondary: "hsla(330, 100% ,71%,1)",
      },
    },
  },
  plugins: [],
};
