module.exports = {
  content: ["./resources/**/*.{html,js}"],
  theme: {
    extend: {
    colors: {
      'primary': '#F0E5CF',
      'second': '#f7f6f2',
      'third': 'c8c6c6',
      'fourth': '#4b6587'
    },
    'fontFamily': {
      'amita': ['Amita', 'cursive', 'sans-serif', ...defaultTheme.fontFamily.sans]
    }
    },
  },
  plugins: [],
}
