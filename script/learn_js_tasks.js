//task 1

function firstTask () {

let name = 'Генератор защитного поля';
let price = 1000;

console.log('Выбран ' + `${name}` + ', цена за штуку ' + `${price}` + ' кредитов');

price = 2000;

console.log('Выбран ' + `${name}` + ', цена за штуку ' + `${price}` + ' кредитов');

}

firstTask();

// task 2

 function secondTask () {
  const total = 100;
  const ordered = 80;
  let message;

  if (ordered > total) {
    message = "На складе недостаточно твоаров!";
  } else {
    message = "Заказ оформлен, с вами свяжется менеджер";
  }

  return console.log(message);
}

secondTask();


// task 3

function thirdTask () {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;
  let askPassword = prompt('Please enter your password');

  switch(askPassword) {
    case null:
    message = 'Отменено пользователем!';
      break;
    
    case `${ADMIN_PASSWORD}`:
    message = 'Добро пожаловать!';
      break;

    default:
    message = 'Доступ запрещен, неверный пароль!';
    break;
  }

  return alert(message)
}

thirdTask();

//task 4 

function taskFourth () {
  const credits = 23580;
  const pricePerDroid = 3000;
  let totalPrice = 0;
  let rest = 0;
  let userOrder = prompt('How many droids do you want to get?');

  if (userOrder === null) {
    return console.log('Отменено пользователем!');
  } else {
    totalPrice = userOrder * pricePerDroid;
  }

  if (totalPrice > credits) {
    return console.log('Недостаточно средств на счету!');
  } else {
    rest = credits - totalPrice;
    return console.log('Вы купили ' + `${userOrder} ` + 'дроидов, на счету осталось ' + `${rest} ` + 'кредитов.');
  }
}
taskFourth();

//task 5 

function taskFifth () {

  let message;
  let userCountry = prompt('Which country shall we deliver the order to?');
  userCountry = userCountry.toLocaleLowerCase();

  switch(userCountry) {
    case 'китай':
      message = 'Доставка в ' + 'Китай ' + 'будет стоить ' + 100 + ' кредитов.';
      break;
    
    case 'чили':
      message = 'Доставка в ' + 'Чили ' + 'будет стоить ' + 250 + ' кредитов.';
      break;
    
    case 'австралия':
      message = 'Доставка в ' + 'Австралию ' + 'будет стоить ' + 170 + ' кредитов.';
      break; 

    case 'индия':
      message = 'Доставка в ' + 'Индию ' + 'будет стоить ' + 80 + ' кредитов.';
      break;

    case 'ямайка':
      message = 'Доставка на ' + 'Ямайку ' + 'будет стоить ' + 120 + ' кредитов.';
      break;

    default:
      message = 'В вашей стране доставка не доступна'; 
  }

  return alert(message);
}

//task 6

taskFifth();


function taskSixth(total, input = prompt('please, enter the number')) {
  total += Number(input);

  if (input !== null) {
    taskSixth( total);
  } else {
    return alert(total);
  }
}

taskSixth(0);