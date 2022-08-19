// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const div = document.querySelector('.gallery');

const renderGalleryItems = (images)  => 
    images.reduce(
        (acc, { preview, original, description }) => acc + ` 
    <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`, ''
    );

const result = renderGalleryItems(galleryItems);
div.insertAdjacentHTML('beforeend', result);

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: '250',
});

console.log(galleryItems);
