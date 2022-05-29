// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line
const gallery = document.querySelector('.gallery');

const galleryList = galleryItems
  .map(({ original, preview, description }) => {
    return `<div><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></div>`;
  })
  .join(' ');
gallery.innerHTML = galleryList;

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
