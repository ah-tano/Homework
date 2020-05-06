import './styles.css';
import apiServices from './services/apiService.js';
import imageThumbnailTemplate from './templates/photo-card-template.hbs';
import '../node_modules/infinite-scroll/dist/infinite-scroll.pkgd.min.js';


const gallery = document.querySelector('.gallery');
apiServices.getImages('cats').then(images => {
    const infScrollInstance = new InfiniteScroll(gallery, {
        path: InfiniteScroll.pageIndex,
        append: '.photo-card',
        history: false,
    });
    // InfiniteScroll()

    console.log(infScrollInstance)

});

// apiServices.createElements(images, imageThumbnailTemplate, gallery)