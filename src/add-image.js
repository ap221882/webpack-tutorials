import Baby from './girl.jpg';

function addImage() {
  const img = document.createElement('img');
  img.alt = 'baby';
  img.width = 300;
  img.src = Baby;
  const body = document.querySelector('body');
  body.appendChild(img);
}

export default addImage;
