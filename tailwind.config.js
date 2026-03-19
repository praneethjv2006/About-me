/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        slate: {
          950: "#060b16",
          900: "#0c1425",
        },
      },
      boxShadow: {
        glow: "0 0 40px rgba(34, 211, 238, 0.18)",
      },
    },
  },
  plugins: [],
}

