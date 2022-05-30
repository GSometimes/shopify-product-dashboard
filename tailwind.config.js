module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#008060', // primary green
        secondary: '#CCCCCC', // hover gray
        surface: '#F0F0F0', // background color
        text: '#111213', // text color
      },
      fontSize: {
        logo: '.9rem', // storefront font size near logo
      },
      boxShadow: {
        'top-bar': '0 2px 2px -1px rgba(0, 0, 0, 0.15);',
      },
    },
  },
  plugins: [],
};
