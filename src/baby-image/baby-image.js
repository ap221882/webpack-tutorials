import Baby from './girl.jpg';
import './baby-image.scss';

class BabyImage {
  render() {
    const img = document.createElement('img');
    img.alt = 'baby';
    img.width = 300;
    img.src = Baby;
    img.classList.add('baby-image');
    const body = document.querySelector('body');
    body.appendChild(img);
  }
}

export default BabyImage;
