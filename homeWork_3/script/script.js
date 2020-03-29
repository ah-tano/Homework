const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
};

const changedUser = {
    mood: 'happy',
    hobby: 'skydiving',
    premium: false,
}

const changeUser = function(object, changedObject) {

    const currentUser = { ...object, ...changedObject };

    for (const key of Object.keys(currentUser)) {

        const value = currentUser[key];

        const data = `Key: ${key} Value: ${value}`;

        console.log(data);

    }

    return currentUser;
};

console.log(changeUser(user, changedUser));



const countProps = function(object) {

    return Object.keys(object).length;

};

console.log(countProps({}));
console.log(countProps({ name: 'Mango', age: 2 }));
console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));



const findBestEmployee = function(employees) {

    let maxTasksAmount = 0;
    let bestEmployeeName;

    for (const name in employees) {
        if (employees[name] > maxTasksAmount) {
            maxTasksAmount = employees[name];

            bestEmployeeName = name;
        }
    }

    return bestEmployeeName;
       
};

console.log(
    findBestEmployee({
      ann: 29,
      david: 35,
      helen: 1,
      lorence: 99,
    }),
);

console.log(
findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
}),
);

console.log(
    findBestEmployee({
      lux: 147,
      david: 21,
      kiwi: 19,
      chelsy: 38,
    }),
);



const countTotalSalary = function(employees) {

    let totalSalary = 0;

    for (const name in employees) {

        let salaryPerEmployee = employees[name];

        totalSalary += salaryPerEmployee;

    }    

    return totalSalary;

    // const salaryPerWorkers = [...Object.values(employees)];
    
    // for (const salary of salaryPerWorkers) {

    //     totalSalary += salary;

    // }

    // return totalSalary;

};

console.log(countTotalSalary({}));

console.log(
    countTotalSalary({
      mango: 100,
      poly: 150,
      alfred: 80,
    }),
  );

console.log(
countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
}),
);


const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроид', price: 400, quantity: 7 },
    { name: 'Захват', price: 1200, quantity: 2 },
  ];

const getAllPropValues = function(objectsArray, property) {

    let valuesOfProperty = [];

    for (let i = 0; i < objectsArray.length; i+=1) {

        let obj = objectsArray[i];

        let valueOfProperty = obj[property];
        
        if (!valueOfProperty) {
            return valuesOfProperty;
        }

        valuesOfProperty.push(valueOfProperty);

    }

    return valuesOfProperty;


};

console.log(getAllPropValues(products, 'name'));
console.log(getAllPropValues(products, 'quantity'));
console.log(getAllPropValues(products, 'category')); 



const calculateTotalPrice = function(allProdcuts, productName) {


    for (let i = 0; i < allProdcuts.length; i++) {

        let {name, price, quantity} = allProdcuts[i];
        
        if (productName === name) {

            return price * quantity;    
        }
        
    }

    return 'No option for calculation is selected';
   
};


console.log(calculateTotalPrice(products, 'Радар'));
console.log(calculateTotalPrice(products, 'Дроид'));
console.log(calculateTotalPrice(products, 'Apple'));


//==========================================================


    const Transaction = {
        DEPOSIT: 'deposit',
        WITHDRAW: 'withdraw',
    };


    const account = {

        balance: 0,

        transactions: [],

    /*
    * Метод создает и возвращает объект транзакции.
    * Принимает сумму и тип транзакции.
    */

        createTransaction(amount, type) {

            const transactionData = {
                id: this.transactions.length + 1,
                amount, 
                type,
            }

            return transactionData;
        },

    /*
    * Метод отвечающий за добавление суммы к балансу.
    * Принимает сумму танзакции.
    * Вызывает createTransaction для создания объекта транзакции
    * после чего добавляет его в историю транзакций
    */

        deposit(amount) {

            const newTransactionDeposit = this.createTransaction(amount, type);

            this.transactions.push(newTransactionDeposit);

            this.balance += newTransactionDeposit.amount;
        },

    /*
    * Метод отвечающий за снятие суммы с баланса.
    * Принимает сумму танзакции.
    * Вызывает createTransaction для создания объекта транзакции
    * после чего добавляет его в историю транзакций.
    *
    * Если amount больше чем текущий баланс, выводи сообщение
    * о том, что снятие такой суммы не возможно, недостаточно средств.
    */

        withdraw(amount) {

            const newTransactionWithdraw = this.createTransaction(amount, type);

            this.transactions.push(newTransactionWithdraw);

            if (amount > this.balance) {

                return 'Your account has insufficient funds';

            } else {

                this.balance -= newTransactionWithdraw.amount;
            }

        },

    /*
    * Метод возвращает текущий баланс
    */
        
        getBalance() {
            return this.balance;
        },
        
    /*
    * Метод ищет и возвращает объект транзации по id
    */

        getTransactionDetails(id) {

            for (let i = 0; i < this.transactions.length; i++) {

                let transaction = this.transactions[i];

                if (transaction.id === id) {

                    return transaction;
                }

            }

            return 'No Transaction with such ID Number';

        },
        
    /*
    * Метод возвращает количество средств
    * определенного типа транзакции из всей истории транзакций
    */
        getTransactionTotal(type) {

            let total = 0;

            for (let i = 0; i < this.transactions.length; i++) {

                let transactionType = this.transactions[i].type;

                if (transactionType === type) {

                    total += this.transactions[i].amount;

                }

            }

            return `Your total ${type} amount: ${total}`;  
        },
    };


let newAction = account.createTransaction(2000, Transaction.DEPOSIT);
let history = account.deposit(2000);


let newActionMection = account.createTransaction(6000, Transaction.DEPOSIT);
let historyMistory = account.deposit(6000);


let newActionMectionPention = account.createTransaction(5000, Transaction.WITHDRAW);
let historyMistoryPention = account.withdraw(5000);


console.log(account.transactions);


account.getTransactionTotal();


console.log(account.getTransactionTotal(Transaction.DEPOSIT));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));

console.log(account.getTransactionDetails(1));
console.log(account.getTransactionDetails(5));



