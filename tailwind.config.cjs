module.exports = {
  content: ['./src/**/*.{astro,html,js,ts}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        brand: { red: '#ff1744', dark: '#0e141b', light: '#f6f7f9' }
      }
    }
  },
  plugins: []
};
