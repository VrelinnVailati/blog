/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      "big-title": ["Lemon_Milk"],
    },
    extend: {
      colors: {
        "dark-purple": "#865DFF",
        "dark-pink": "#E384FF",
        "light-pink": "#FFA3FD",
        "misty-rose": "#FFEAEA",
        "lion": "#C6A174"
      },
    },
  },
  plugins: [],
};
