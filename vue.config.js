module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/auth/dist/'
    : '/',
  devServer: {
    https: true
  }
}
