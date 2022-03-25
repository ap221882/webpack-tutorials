#Webpack tutorials

1. npx webpack
<!-- // for detailed version of execution -->
2. npx webpack --stats detailed

<!-- Custom Configuration -->

3. see in webpack.config.js file
      <!-- Asset modules-->
   1.asset/resource
      <!-- public path -->
   //default is set to auto in webpack5
   // publicPath: 'dist/',
   // publicPath: 'auto',
   // publicPath: '',
   // publicPath: 'https://some-cdn.com/',
   2.asset/inline
      <!-- Inlines a file into a bundle as a data -->
      <!-- doesnt generate a new file in the output directory -->
   <!-- used generally for small assets -->//makes bundle bigger
   <!-- webpack converts asset/file to base 64 string and injects into the bundle -->
   <!-- less http requests needed that are costly in case of tiny files -->
