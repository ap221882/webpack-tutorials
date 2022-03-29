import Heading from './components/heading/heading.js';
import KiwiImage from './components/kiwi-image/kiwi-image.js';

const heading = new Heading();
heading.render('kiwi');
const kiwiImage = new KiwiImage();
kiwiImage.render();

// import('HelloWorldApp/HelloWorldButton');
//to use dynamic import because remote bundles are loaded asynchronously
// import('HelloWorldApp/HelloWorldButton').then((HelloWorldButtonModule) => {
//   const HelloWorldButton = HelloWorldButtonModule.default;
//   const helloWorldButton = new HelloWorldButton();
//   helloWorldButton.render();
// });
