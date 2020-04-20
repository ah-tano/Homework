// https://github.com/goitacademy/javascript-homework/tree/master/homework-08

// Создай галерею с возможностью клика по ее элементам и просмотра полноразмерного изображения в модальном окне.
// Разбей задание на несколько подзадач:

// Создание и рендер разметки по массиву данных и предоставленному шаблону.
// Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.
// Открытие модального окна по клику на элементе галереи.
// Подмена значения атрибута src элемента img.lightbox__image.
// Закрытие модального окна по клику на кнопку button[data-action="close-modal"].
// Очистка значения атрибута src элемента img.lightbox__image. Это необходимо для того, чтобы при следующем открытии модального окна, пока грузится изображение, мы не видели предыдущее.

// Разметка элемента галереи
// Ссылка на оригинальное изображение должна храниться в data-атрибуте source на элементе img, и указываться в href ссылки (это необходимо для доступности).

// Дополнительно
// Следующий функционал не обязателен при сдаче задания, но будет хорошей практикой по работе с событиями.

// Закрытие модального окна по клику на div.lightbox__overlay.
// Закрытие модального окна по нажатию клавиши ESC.
// Пролистывание изображений галереи в открытом модальном окне клавишами "влево" и "вправо".

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
  lightbox.classList.add('is-open');
  lightboxImage.src = bigSizeImg;
  lightboxImage.alt = currentImage.alt;
};

const imagesList = gallery.querySelectorAll('.gallery__link img');
imagesList.forEach(image => {
  image.addEventListener('click', lightboxHandler);
});

const galleryItems = Array.from(gallery.querySelectorAll('.gallery__item img'));
const arrowHandler = e => {
  galleryItems.reduce((acc, item, index) => {
    if (e.target.src === item.src) {
      const counter = index;
      if (e.keyCode === 37) {
        document.addEventListener('keydown', (e) => {

        })
      }
    }
  }, e.target.src)
}

galleryItems.forEach(item => item.addEventListener('click', arrowHandler));
// if (e.keyCode === 37) {
//   document.addEventListener('keydown', (e) => { })
// } 

const closeLightboxBtn = document.querySelector('.lightbox__button');
closeLightboxBtn.addEventListener('click', () => {
  lightbox.classList.remove('is-open');
  // lightboxImage.removeAttribute("src");
})

lightbox.addEventListener('click', (e) => {
  const imageBox = document.querySelector('.lightbox__image');
  if (e.target === imageBox) {
    return;
  }
  lightbox.classList.remove('is-open');
  // lightboxImage.removeAttribute("src");
})

document.addEventListener('keydown', (e) => {
  if (e.keyCode === 27) {
    lightbox.classList.remove('is-open');
    // lightboxImage.removeAttribute("src");
  }
})





