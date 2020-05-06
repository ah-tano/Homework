// import imageThumbnailTemplate from '../templates/photo-card-template.hbs';

export default {
    getImages(searchQuery) {
        const key = '16411365-756c10199afcef78188f372f0';
        const baseUrl = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=1&per_page=12&key=${key}`;

        return fetch(baseUrl)
            .then(response => {
                return response.json()
            }).then(data => data.hits)
    },
    createElements(images, templ, ref) {
        const imagesList = images.map(image => {
            const element = templ(image);
            return element;
        })
        ref.insertAdjacentHTML('beforeend', imagesList.join(''))
    }
}



