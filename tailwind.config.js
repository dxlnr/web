module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
        syne: ["Syne"],
        mohave: ["Mohave"],
      },
      fontSize: {
          'hxl': ['14rem', {
              'lineHeight': '20px',
          }]
      },
      colors: {
        // 'darkMode': '#202020',
        'darkMode': '#000000',
        'darkModeHover': '#323232',
        'darkModeTextHover': '#bafc56',
      },
      transitionDuration: {
        '2000': '2000ms',
        '3000': '3000ms',
        '4000': '4000ms',
        '5000': '5000ms',
      }
    }
  },
  plugins: []
};
