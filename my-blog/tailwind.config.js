module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,jsx,ts,tsx,md,mdx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: '#ffffff',
        text: '#1a1a1a',
        accent: '#a6b0bd',
        darkBackground: '#111111',
        darkText: '#eeeeee'
      },
      fontFamily: {
        header: ['"Unica One"', '"Neue Haas Grotesk"', '"Space Grotesk"', 'sans-serif'],
        body: ['Inter', '"IBM Plex Sans"', 'sans-serif']
      }
    }
  },
  plugins: []
};