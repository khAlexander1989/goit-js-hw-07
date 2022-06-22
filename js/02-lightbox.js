import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
  gallery: document.querySelector('div.gallery'),
};

const galleryMarkup = createGalleryMarkup(galleryItems);

refs.gallery.innerHTML = galleryMarkup;

const modalOptions = {
  captionsData: 'alt',
  captionDelay: 250,
};

const modal = createModal('.gallery a', modalOptions);

//--------------FUNCTIONS------------------------

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" data-title = "sshdfkjshdfjsdfskdhfhskdfhsjdhfksjd" />
        </a>
        `;
    })
    .join('');
}

function createModal(node, opts) {
  return new SimpleLightbox(node, opts);
}

console.log(galleryItems);
