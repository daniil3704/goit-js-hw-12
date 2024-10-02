import { getImages } from './js/pixabay-api';
import { imageRender } from './js/render-functions';
import { imageClear } from './js/render-functions';
import simpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('form');

form.addEventListener('submit', async event => {
  event.preventDefault();
  const images = await getImages();
  const imagesArray = images.hits;
  imageClear();
  imageRender(imagesArray);
  const lightbox = new simpleLightbox('.gallery .gallery-item a', {
    captionsData: 'alt',
    captionDelay: 250,
    scrollZoom: false,
  });
  lightbox.refresh;
});
