import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
  gallery: document.querySelector('div.gallery'),
  body: document.querySelector('body'),
};

const galleryMarkup = createGalleryMarkup(galleryItems);

refs.gallery.innerHTML = galleryMarkup;
refs.gallery.addEventListener('click', onGalleryClick);

const modalOptions = {
  onShow: () => {
    window.addEventListener('keydown', onEscBtnPress);
    refs.body.classList.add('no-scroll');
  },

  onClose: () => {
    window.removeEventListener('keydown', onEscBtnPress);
    refs.body.classList.remove('no-scroll');
  },
};

const modal = createModal('<img src="" width="800" height="600">', modalOptions);

//---------------------------FUNCTIONS------------------------------------------

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </div>
        `;
    })
    .join('');
}

function createModal(node, opts) {
  return basicLightbox.create(node, opts);
}

function changeModalImgUrl(modal, url) {
  modal.element().querySelector('img').src = url;
}

//------------------EVENT LISTENERS FUNCTIONS--------------------------------------

function onEscBtnPress({ code }) {
  if (code === 'Escape') modal.close();
}

function onGalleryClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') return;

  const originalImgUrl = event.target.dataset.source;

  changeModalImgUrl(modal, originalImgUrl);

  modal.show();
}

//-----------------------------------------------------------------------

console.log(galleryItems);
