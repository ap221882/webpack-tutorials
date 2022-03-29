const url = window.location.pathname;
if (url === '/hello-world-page') {
  // Dynamic imports
  import('HelloWorldApp/HelloWorldPage').then((HelloWorldPageModule) => {
    const HelloWorldPage = HelloWorldPageModule.default;
    const helloWorldPage = new HelloWorldPage();
    helloWorldPage.render();
  });
} else if (url === '/kiwi-page') {
  import('KiwiApp/KiwiPage').then((KiwiPageModule) => {
    const KiwiPage = KiwiPageModule.default;
    const kiwiPage = new KiwiPage();
    kiwiPage.render();
  });
}
console.log('dashboard');
console.log('Ajay');
console.log(window.location.pathname);
import('HelloWorldApp/HelloWorldPage').then((HelloWorldPageModule) => {
  const HelloWorldPage = HelloWorldPageModule.default;
  const helloWorldPage = new HelloWorldPage();
  helloWorldPage.render();
});
