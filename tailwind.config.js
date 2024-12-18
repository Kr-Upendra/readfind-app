/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        black: "#000000", // Background color (black theme)
        "dark-gray": "#121212", // For darker gray elements (text, borders, etc.)

        // Text Colors
        yellow: "#FFDD00", // Primary yellow for titles, bold text, and highlights
        "light-yellow": "#FFEB66", // Light yellow for secondary text and less important details
        "light-gray": "#A8A8A8", // Lighter gray for secondary content, less important text
        "gray-600": "#4B4B4B", // Medium gray for dividers, and subtle borders

        // Accents and UI Elements
        "button-yellow": "#FFDD00", // For buttons and CTA elements
        "button-hover": "#FFC700", // Hover effect for buttons (darker yellow)
      },
      fontFamily: {
        "heading-bold": ["Merriweather-Bold", "serif"],
        "heading-regular": ["Merriweather-Regular", "serif"],
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
