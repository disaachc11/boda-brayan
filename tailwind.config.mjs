export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}", "*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: '#d4b08c',
        secondary: '#8d7b68',
        accent: '#a27b5c',
        background: '#faf7f2',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        script: ['"Great Vibes"', 'cursive'],
      },
    },
  },
  plugins: [],
}

