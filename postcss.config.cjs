// module.exports = {
//   plugins: [
//     require('postcss-import'),
//     require('postcss-preset-env')({
//       stage: 1,
//     }),
//     require('postcss-custom-media'),
//     'tailwindcss/nesting': {},
//     'tailwindcss': {},
//   ]
// }

module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-preset-env': ({
            stage: 1,
          }),
    'postcss-custom-media': {},
    'tailwindcss/nesting': 'postcss-nesting',
    tailwindcss: {},
    autoprefixer: {},
  }
}