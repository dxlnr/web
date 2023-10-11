module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
      },
      fontSize: {
          'hxl': ['14rem', {
              'lineHeight': '20px',
          }]
      },
      transitionDuration: {
        '2000': '2000ms',
        '4000': '4000ms',
        '5000': '5000ms',
      }
    }
  },
  plugins: []
};
