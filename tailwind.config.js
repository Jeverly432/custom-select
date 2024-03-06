/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          primary: {
            100: "#BAC1CC",
            500: "#BAC1CC1A",
            700: "#2B2C36",
            900: "#BAC1CC",
          },
        },
        blue: {
          primary: {
            100: "#47C2E92E",
            500: "#202f34",
          },
        },
      },
    },
  },
  plugins: [],
};

