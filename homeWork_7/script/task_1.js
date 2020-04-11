// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

const categories = document.querySelector('#categories');
const allItems = Array.from(document.querySelectorAll('li.item'));

const titles = array => array.map((item, categoryTitle) => categoryTitle = item.querySelector('h2').textContent);
const itemsAmountPerCategory = array => array.map(item => item.querySelectorAll('li').length);

const getTitles = titles(allItems);
const getItems = itemsAmountPerCategory(allItems);


const showData = () => {
  let info;
  for (let categoryData of allItems) {
    info = `Категория: ${categoryData.querySelector('h2').textContent}\nКоличество:  ${categoryData.querySelectorAll('li').length}`;
    console.log(info);
  }
}

showData();

function countCategories(categories) {
  const categoriesTotalAmount = allItems.length;

  return console.log(`В списке ${categoriesTotalAmount} категории.`);
}

countCategories(allItems);

















