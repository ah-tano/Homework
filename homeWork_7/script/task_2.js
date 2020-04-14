// Задание 2
// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>
// В JS есть массив строк.

// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().
const ingredientsList = document.querySelector('#ingredients');

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const createIngredientsList = (ingredients) => { 
    return ingredients.map((ingredient, item) => {
        item = document.createElement('li');
        item.textContent = ingredient;
        return item;
    })
}

const addIngredientsList = (items) => {
     for(let item of items) { ingredientsList.append(item) }
};

const ingredientsItems = createIngredientsList(ingredients);
addIngredientsList(ingredientsItems);




