// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,jsx,ts,tsx,md,mdx}',
    './components/**/*.{js,jsx,ts,tsx,md,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: '#ffffff',
        text: '#1a1a1a',
        accent: '#a6b0bd',
        darkBackground: '#111111',
        darkText: '#eeeeee',
        lightGray: '#f7f7f7'
      },
      fontFamily: {
        header: ['"Unica One"', '"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
};