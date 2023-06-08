/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        h1, h2, h3: ["wotfard", "InterVariable", "Inter", ...defaultTheme.fontFamily.sans],
        h4: ["wotfard-bold", "InterVariable", "Inter", ...defaultTheme.fontFamily.sans],
        p: ["wotfard-thin", "InterVariable", "Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
