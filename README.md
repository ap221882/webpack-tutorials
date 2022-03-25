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
    4.2--
    {
    test:/\.scss$/,
    use:[
    'style-loader','css-loader','sass-loader'
    ] //order matters in the array
    }

    $$
    npm install sass-loader sass --save-dev

    4.3
    import other JS files into our JS file
    --It is done implicitly
    $$using babel for using modern JS// see webpack.config.js
    $$

5.  Plugins
       <!-- JS libraries which do things beyong imports only as done by loaders -->

    5.1 Reduce size of bundle
    ##const TerserPlugin = require('terser-webpack-plugin');
    ##plugins: [new TerserPlugin()]
    5.2 Extracting css into a separate bundle with mini-css-extract-plugin
    //extracts css of all components and saves them in a single file--here styles.css
    5.3
    Browser caching
    bundle.[contenthash].js
    5.4
    Clean dist folder before genrating new bundles
    -->CleanWebpackPlugin
    5.5
       <!-- To not change filenames in html after each build process as bundles are dynamic -->

    Genrating html files automatically during build process using HtmlWebpackPlugin() // but we will have to chnage publicpath to '' from 'dist' bcoz now index.html is in ./dist itself
    5.6
    customizing generated HTML files
    5.7
    creating our own template to use in index.html
    using various template engines like pug, ejs, underscore, handlebars, html-loader
    Handlebar: a template engine for JS that allows you to separate business logic from presentation.
    //check config for .hbs files and index.hbs file
    ==================>Check plugins from webpack docs<===========

6.  mode enables certain built-in optimizations for production builds and development builds
    6.1
    3 values possible : none, development, production
      <!-- develppment mode uses source maps by default -->
    6.2 separating dev and production mode
    6.3 npm install --->webpack-dev-server
    devServer:{
    port:9000,
    static:{
    directory:path.resolve(\_\_dirname,'./dist')
    },
    devMiddleware:{
    index:'index.html',
    writeToDisk:true
    }
    }
    in package.json->
    "dev": "webpack --config webpack.development.config.js" to "dev": "webpack serve --config webpack.development.config.js --hot"
