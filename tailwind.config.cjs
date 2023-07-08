/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: { 
    screens: {
    'sm': '640px',
    // => @media (min-width: 640px) { ... }

    'md': '968px',
    // => @media (min-width: 968px) { ... }

    'lg': '1199px',
    // => @media (min-width: 1199px) { ... }

    'xl': '1680px',
    // => @media (min-width: 1680px) { ... }

    '2xl': '1920px',
    // => @media (min-width: 2160px) { ... }
  },
    extend: {
      fontFamily: {
        sans: ["Inconsolata", "InterVariable", "Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
