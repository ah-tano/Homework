import './styles.css';
import InfiniteScroll from 'infinite-scroll';
import imageThumbnailTemplate from './templates/photo-card-template.hbs';
import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
const _ = require('lodash');

let searchQuery;
let itemsToAppend;
const searchField = document.getElementById('search');
const grid = document.querySelector('.grid');

const msnry = new Masonry(grid, {
  itemSelector: '.grid__item',
  columnWidth: 1,
  gutter: 10,
});

const infScroll = new InfiniteScroll(grid, {
  responseType: 'text',
  path() {
    return `https://cors-anywhere.herokuapp.com/https://pixabay.com/api/?key=16411365-756c10199afcef78188f372f0&q=${searchQuery}&image_type=photo&orientation=horizontal&page=${this.pageIndex}&per_page=12&pretty=true`;
  },
  history: false,
  outlayer: msnry,
  fitWidth: true,
});

infScroll.on('load', response => {
  const images = JSON.parse(response);
  const imageItems = images.hits;

  const markupString = imageItems.map(image => {
    const element = imageThumbnailTemplate(image);
    return element;
  });

  const proxyEl = document.createElement('div');
  proxyEl.innerHTML = markupString.join('');

  itemsToAppend = proxyEl.querySelectorAll('.grid__item');

  infScroll.appendItems(itemsToAppend);
  msnry.appended(itemsToAppend);

  imagesLoaded(grid).on('progress', function () {
    msnry.layout();
  });
});

const inputHandler = () => {
  searchQuery = searchField.value;

  if (searchQuery) {
    grid.innerHTML = '';
    infScroll.pageIndex = 1;
    infScroll.loadNextPage();
  } else {
    grid.innerHTML = '';
  }
};

let largeUrl;
const lightBox = basicLightbox.create(
  `
    <img class='bigImage'>`,
  {
    closable: true,
  },
);

const lightBoxHandler = e => {
  if (e.target.nodeName === 'IMG') {
    const thumbnail = e.target;
    largeUrl = thumbnail.dataset.largeurl;
    lightBox.show();
    const bigImageItem = document.querySelector('.bigImage');
    bigImageItem.src = largeUrl;
  } else {
    return;
  }
};

searchField.addEventListener('input', _.debounce(inputHandler, 500));
grid.addEventListener('click', lightBoxHandler);
