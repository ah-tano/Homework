const ingredientsList = document.querySelector('#ingredients');
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const createIngredientsList = ingredients => {
  return ingredients.map((ingredient, item) => {
    item = document.createElement('li');
    item.textContent = ingredient;
    return item;
  });
};

const addIngredientsList = items => {
  for (let item of items) {
    ingredientsList.append(item);
  }
};

const ingredientsItems = createIngredientsList(ingredients);
addIngredientsList(ingredientsItems);
