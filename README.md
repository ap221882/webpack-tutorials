#Webpack tutorials

1. npx webpack
<!-- // for detailed version of execution -->
2. npx webpack --stats detailed

<!-- Custom Configuration -->

3.  see in webpack.config.js file
       <!-- Asset modules-->//imgs,fonts,simple text files
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
    3.general asset type
    <!-- webpack will decide whteher to import by asset/resource or asset/inline based on size of file -->
    <!-- if > 8 kilobyte=> asset/resource else asset/inline -->
       <!-- we can change this '8kb magic number too'read webpack.config.js -->
    <!-- type:'asset' -->
    4. asset/source
    <!-- without any modification as string, file is injected without creating a new file -->
4.  Webpack loaders // to import things that assets modules cant handle
    <!-- Explicitly we need to install packages for the loaders -->
         <!-- other js modules, css,sass,handlebars,xml and much more -->
         <!-- webpack loaders are JS Libraries that help you to import that stuff -->
        4.1. import css
        style-loader
        reads content of css file and returns content only
        css-loader
        injects the style tags into the bundle of the respective component
