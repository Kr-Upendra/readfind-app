/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./containers/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#FFDD00",
        secondary: "#FFEB66",
        "dark-primary": "#000000",
        "dark-secondary": "#121212",
        "gray-primary": "#A8A8A8",
        "gray-secondary": "#4B4B4B",
        "button-primary": "#FFDD00",
        "button-secondary": "#FFC700",
      },
      fontFamily: {
        "heading-regular": ["fredoka-one-regular", "system-ui"],
        "body-bold": ["OpenSans-Bold", "sans-serif"],
        "body-extrabold": ["OpenSans-ExtraBold", "sans-serif"],
        "body-light": ["OpenSans-Light", "sans-serif"],
        "body-medium": ["OpenSans-Medium", "sans-serif"],
        "body-regular": ["OpenSans-Regular", "sans-serif"],
        "body-semibold": ["OpenSans-SemiBold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
