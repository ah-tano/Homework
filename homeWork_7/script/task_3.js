
// Напиши скрипт для создания галлереи изображений по массиву данных.

// В HTML есть список ul#gallery.

// <ul id="gallery"></ul>
// Используй массив объектов images для создания тегов img вложенных в li. Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.

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

  const galleryList = document.querySelector('.gallery_photo-previews');

  const createGallery = gallery => {
      return gallery.map(photo => {
        let picture = photo['url'];
        let text = photo['alt'];
        const pictureItem = `<button class="gallery_photo-preview"><img src="${picture}" alt="${text}" width = "900"></button>`;
        return pictureItem;
    });
  }

const photosList = createGallery(images).join('');

const makeGallery = () => {
    galleryList.insertAdjacentHTML('afterbegin', photosList);
}

makeGallery();

const fullPhoto = document.querySelector('.full-photo');

const changePhotoToFull = () => {
  const galleryList = document.querySelectorAll('.gallery_photo-preview');
  galleryList.forEach((photo, index) => {
    photo.addEventListener('click', () => {
     const photoSrc = images[index]['url'];
      fullPhoto.src = photoSrc;
    }) 
  })
}  

changePhotoToFull();

const getPhotosUrl = photos => photos.map(photo => {
  let {url} = photo;
  return url;
 })
 const photosUrl = getPhotosUrl(images);


const counter = () => {
  let currentIndex = 1;

  const changePhotoWithRightArrow = () => {

    const photosElements = document.querySelectorAll('.gallery_photo-preview img');

    const rightArrow = document.querySelector('.gallery_arrow-right');

    rightArrow.addEventListener('click', () => {
      fullPhoto.src = photosUrl[currentIndex];
      currentIndex += 1; 
      if (currentIndex >= photosUrl.length) {
        currentIndex = 0;
      }
      console.log('right arrow', currentIndex)
    })
  }

  const changePhotoWithLeftArrow = () => {
    // const photosElements = document.querySelectorAll('.gallery_photo-preview');
    const leftArrow = document.querySelector('.gallery_arrow-left');
    leftArrow.addEventListener('click', () => {
      currentIndex -= 1
      fullPhoto.src = photosUrl[currentIndex - 1];
      console.log('left arrow', currentIndex);
      })
      
  }

  changePhotoWithRightArrow();
  changePhotoWithLeftArrow();
}
counter();

