const categories = document.querySelector('#categories');
const allItems = Array.from(document.querySelectorAll('li.item'));

function countCategories(categories) {
  const categoriesTotalAmount = allItems.length;
  console.log(`В списке ${categoriesTotalAmount} категории.`);
}
countCategories(allItems);

const showCategoryInfo = array => {
  array.forEach(category => {
    const categoryTitle = category.querySelector('h2').textContent;
    const amount = category.querySelectorAll('li').length;
    console.log(`Категория: ${categoryTitle}\nКоличество: ${amount}`);
  });
};
showCategoryInfo(allItems);
