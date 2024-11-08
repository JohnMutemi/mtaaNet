// Import the withMT function from Material Tailwind
const withMT = require('@material-tailwind/html/utils/withMT');

module.exports = withMT({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
});
