const categories = document.querySelector('#categories');
const allItems = Array.from(document.querySelectorAll('li.item'));

const showCategoryInfo = array => {
  array.forEach(category => {
    let categoryTitle = category.querySelector('h2').textContent;
    let amount = category.querySelectorAll('li').length;
    console.log(`Категория: ${categoryTitle}\nКоличество: ${amount}`);
  });
};

function countCategories(categories) {
  const categoriesTotalAmount = allItems.length;

  return console.log(`В списке ${categoriesTotalAmount} категории.`);
}

countCategories(allItems);
showCategoryInfo(allItems);
