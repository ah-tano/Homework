const logItems = function(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`${i + 1} - ${array[i]}`)
    }
};

logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);



const calculateEngravingPrice = function(message, pricePerWord) {
    const wordsArray = Array.from(message.split(' '));
    return wordsArray.length * pricePerWord;
     
};

console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10));
console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20));
console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40));
console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20));



const findLongestWord = function(string) {
    const wordsArray = Array.from(string.split(' '));
    let longestWord = wordsArray[0];

    for(let word of wordsArray) {

        if (word.length > longestWord.length) {

            longestWord = word;
        }  

    }

    return longestWord;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
console.log(findLongestWord('Google do a roll'));
console.log(findLongestWord('May the force be with you'));



const formatString = function(string) {

    if (string.length > 40) {
        return string.slice(0, 41) + '...';
    }

    return string;
};

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
console.log(formatString('Curabitur ligula sapien.'));
console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'));



const checkForSpam = function(message) {
    message = message.toLowerCase();

    const spamWords = ['spam', 'sale'];

    for(let word of spamWords) {

        if (message.includes(word)) {
            return true;
        }
    }

    return false;
};  

console.log(checkForSpam('Latest technology news'));
console.log(checkForSpam('JavaScript weekly newsletter'));
console.log(checkForSpam('Get best sale offers now!'));
console.log(checkForSpam('[SPAM] How to earn fast money?'));



const showSum = function(numbers = [], input = prompt('Please, enter the number')) {

    if (isNaN(input)) {
        alert('Было введено не число, попробуйте еще раз');
        showSum();
    } else if (input !== null) {

        numbers.push(Number(input));
        showSum(numbers);
        
    } else { 
        let total = 0;

        for(let number of numbers) {
            total += number;
        }

        return console.log(total);
    }


};

showSum();
    

const addNewUser = function() {

    const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

    const getLogin =  function() { 
        return prompt('Enter your login');
    }


    const isLoginValid = function(login) {
        
        if (login.length < 4 || login.length > 16) {
            return false; 
        } else { 
            return true;
        }

    }


    const isLoginUnique = function(logins, login) {

        if (logins.includes(login)) {
            return false;
        };

        return true;

    }


    const addLogin = function(logins, login) {
        
        let message;

        if (isLoginValid(login) === false) {

            message = 'Ошибка! Логин должен быть от 4 до 16 символов';
            return console.log(message);
        
        } 

        if (isLoginUnique(logins, login) === false) {
            
            message = 'Такой логин уже используется!';
            return console.log(message);

        } 

            logins.push(login);
            message = 'Логин успешно добавлен!';
            console.log(logins);
            return console.log(message);
    }


    addLogin(logins, getLogin());
}

addNewUser();








