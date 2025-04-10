// vue.config.js
   module.exports = {
     publicPath: process.env.NODE_ENV === 'production' ? '/my-app/' : '/',
     outputDir: 'dist',
     assetsDir: 'static',
     devServer: {
       port: 8080,
       open: true, // Opens the browser automatically
       proxy: {
         // Proxy API requests to a backend server
         '/api': {
           target: 'http://localhost:3000',
           changeOrigin: true,
           pathRewrite: { '^/api': '' },
         },
       },
     },
     // Additional configurations can be added here
   }
