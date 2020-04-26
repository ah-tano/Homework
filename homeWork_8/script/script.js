// https://github.com/goitacademy/javascript-homework/tree/master/homework-08

import { default as images } from './gallery-items.js';

const createElement = images =>
  images.map(image => {
    const element = `
    <li class="gallery__item">
        <a
        class="gallery__link"
        href="${image.original}"
        >
        <img
            class="gallery__image"
            src="${image.preview}"
            data-source="${image.original}"
            alt="${image.description}"
        />
        </a>
    </li>`;

    return element;
  });
const elements = createElement(images);
const elementsList = elements.join('');

const gallery = document.querySelector('.js-gallery');
const appendElements = elements => {
  gallery.insertAdjacentHTML('beforeend', elements);
};
appendElements(elementsList);

const links = Array.from(gallery.querySelectorAll('.gallery__item a'));
links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
  });
});

const lightbox = document.querySelector('.js-lightbox');
const lightboxImage = document.querySelector('.lightbox__image');

const lightboxHandler = e => {
  const currentImage = e.target;
  const bigSizeImg = currentImage.dataset.source;

  if (e.target === e.currentTarget) {
    return;
  }

  lightbox.classList.add('is-open');
  lightboxImage.src = bigSizeImg;
  lightboxImage.alt = currentImage.alt;
};

gallery.addEventListener('click', lightboxHandler);

const closeLightboxBtn = document.querySelector('.lightbox__button');
closeLightboxBtn.addEventListener('click', () => {
  lightbox.classList.remove('is-open');
  lightboxImage.removeAttribute('src');
});

lightbox.addEventListener('click', e => {
  const imageBox = document.querySelector('.lightbox__image');
  if (e.target === imageBox) {
    return;
  }

  lightbox.classList.remove('is-open');
  lightboxImage.removeAttribute('src');
});

const galleryItems = Array.from(gallery.querySelectorAll('.gallery__item img'));
const getIndex = e => {
  let currentIndex = 0;
  galleryItems.filter((item, index) => {
    if (item.dataset.source === lightboxImage.src) {
      currentIndex = index;
    }
  });
  return currentIndex;
};

let index = 0;
gallery.addEventListener('click', e => {
  index = getIndex(e);
});

document.addEventListener('keydown', e => {
  if (e.keyCode === 27) {
    lightbox.classList.remove('is-open');
    lightboxImage.removeAttribute('src');
  }
  if (e.keyCode === 37) {
    if (index > 0) {
      lightboxImage.src = galleryItems[(index -= 1)].dataset.source;
    }
  }
  if (e.keyCode === 39) {
    if (index < galleryItems.length - 1) {
      lightboxImage.src = galleryItems[(index += 1)].dataset.source;
    }
  }
});
