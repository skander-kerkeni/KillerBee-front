module.exports = {
  devServer: {
    proxy: 'http://localhost:8000/'
  },
  css: {
    // Enable CSS source maps.
    sourceMap: process.env.NODE_ENV !== 'production'
  }
};
