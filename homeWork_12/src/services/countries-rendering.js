
export default {

    getCountriesNames(data) {
        return data.map(country => {
            const name = country.name;
            return name;
        })
    },

    createElements(countries) {
        const list = countries.map(country => {
            const element = `<li>${country}</li>`
            return element;
        }).join('');

        return list;
    },

    appendElements(elements, ref) {
        return ref.insertAdjacentHTML('beforeend', elements)
    },

}
