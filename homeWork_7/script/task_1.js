// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

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
