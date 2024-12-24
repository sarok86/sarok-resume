/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      rotate: {
        20: "20deg",
      },
      colors: {
        black: "#0b090a",
        red: "#e5383b",
        gray: "#b1a7a6",
      },
      backgroundImage: {
        blackAndWhite: "@/app/image/black and white.jpg",
      },
    },
  },
  plugins: [],
};
