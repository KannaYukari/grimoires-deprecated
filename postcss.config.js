module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    // Purge and minify CSS only production builds only
    ...(process.env.NODE_ENV === 'production'
      ? { ...purgecss, cssnano: {} }
      : {})
  }
}
