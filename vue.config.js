const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './', // Use relative paths for static hosting
  outputDir: 'dist', // Default output directory
})
