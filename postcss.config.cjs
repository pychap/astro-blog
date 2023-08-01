module.exports = {
  plugins: [
    require('postcss-preset-env', 'postcss-custom-media')({
      stage: 0,
    })
  ]
}