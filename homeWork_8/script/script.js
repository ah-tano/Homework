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

const createElement = images => images.map(image => {
    const element = `
    <li class="gallery__item">
        <a
        class="gallery__link"
        href="${image.original}"
        >
        <img
            class="gallery__image"
            src="${image.preview}"
            data-source="${images.original}"
            alt="${image.description}"
        />
        </a>
    </li>`

    return element;
})
const elements = createElement(images);
const elementsList = elements.join('');

const gallery = document.querySelector('.js-gallery');
const appendElements = elements => {
    gallery.insertAdjacentHTML('beforeend', elements);
}
appendElements(elementsList);

const getUrls = images => images.map(image => {
    const url = image.original;
    return url;
})
const urls = getUrls(images);


gallery.forEach(element => {
    element.addEventListener('click', galleryClickHandler);
})


