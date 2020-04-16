const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const createGallery = pictures => {
  return pictures.map(picture => {
    let pictureItem = picture['url'];
    let text = picture['alt'];
    const galleryItem = `<button class="gallery_photo-preview">
    <img src="${pictureItem}" alt="${text}" width = "900">
    </button>`;
    return galleryItem;
  });
};
const photosList = createGallery(images).join('');

const galleryList = document.querySelector('.gallery_photo-previews');
const makeGallery = () => {
  galleryList.insertAdjacentHTML('afterbegin', photosList);
};
makeGallery();

const fullPhoto = document.querySelector('.full-photo');
const galleryListItem = document.querySelectorAll('.gallery_photo-preview');
const urlsList = Array.from(galleryListItem).map(
  item => item.querySelector('img').src
);
const listImages = Array.from(galleryListItem).map(item =>
  item.querySelector('img')
);
const rightArrow = document.querySelector('.gallery_arrow-right');
const leftArrow = document.querySelector('.gallery_arrow-left');

let index = 0;

const rightArrowHandler = index => {
  index += 1;
  fullPhoto.src = urlsList[index];
  listImages[index].classList.add('focus');
  if (index === images.length - 1) {
    rightArrow.style.display = 'none';
  }
};

rightArrow.addEventListener('click', () => {
  rightArrowHandler(index);
  index += 1;
  listImages[index - 1].classList.remove('focus');
  leftArrow.style.display = 'block';
});

const leftArrowHandler = () => {
  fullPhoto.src = urlsList[index];
  listImages[index].classList.add('focus');
  if (index === 0) {
    leftArrow.style.display = 'none';
  }
};

leftArrow.addEventListener('click', () => {
  index -= 1;
  leftArrowHandler();
  listImages[index + 1].classList.remove('focus');
  rightArrow.style.display = 'block';
});
