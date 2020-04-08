const Account = function (user) {

    this.login = user.login;
    this.email = user.email;

};

Account.prototype.getInfo = function() {
    console.log(`Login: ${this.login}, Email: ${this.email}`);
}


console.log(Account.prototype.getInfo); // function

const mango1 = new Account({
  login: 'Mangozedog',
  email: 'mango@dog.woof',
});

mango1.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly1 = new Account({
  login: 'Poly',
  email: 'poly@mail.com',
});

poly1.getInfo(); // Login: Poly, Email: poly@mail.com



class User {

    constructor(user) {
        this.name = user.name;
        this.age = user.age;
        this.followers = user.followers;
    }

    getInfo() {
        console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`);
    }

};

const mango2 = new User({
    name: 'Mango',
    age: 2,
    followers: 20,
  });
  
  mango2.getInfo(); // User Mango is 2 years old and has 20 followers
  
  const poly2 = new User({
    name: 'Poly',
    age: 3,
    followers: 17,
  });
  
  poly2.getInfo(); // User Poly is 3 years old and has 17 followers



class Storage {

    constructor(items) {

        this.items = items;
    }

    getItems() {
        return this.items;
    }

    addItem(item) {

        this.item = item;
        
        this.items.push(this.item);

        return this.items;
    }

    removeItem(item) {

        this.item = item;

        for (let i = 0; i < this.items.length; i++) {

            const itemInStock = this.items[i];
            
            if (itemInStock === this.item) {

                this.items.splice(i, 1);
            }
        }

        return this.items;
    }
};

const storage = new Storage([
    'Нанитоиды',
    'Пролонгер',
    'Железные жупи',
    'Антигравитатор',
  ]);
  
  const items = storage.getItems();
  console.log(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]
  
  storage.addItem('Дроид');
  console.log(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]
  
  storage.removeItem('Пролонгер');
  console.log(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]



  class StringBuilder {

    constructor (string) {

    this._value = string;

    }

    get value() {
        return this._value;
    }

    append(string) {

        this.string = string;

        this._value = this._value + this.string;

        return this._value;
    }

    prepend(string) {

        this.string = string;

        this._value = this.string + this._value;

        return this._value;
    }

    pad(string) {

        this.string = string;

        this._value = this.string + this._value + this.string;

        return this._value;
    }
  }

  const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='



class Car {
    
    constructor(car) {

        this.car = car;
        this.speed = 0;
        this.price = car.price;
        this.maxSpeed = car.maxSpeed;
        this.isOn = false;
        this.distance = 0;
    }

    static getSpecs(car) {

        return console.log(`maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`);

    }

    get _price() {
        return this.price;
    }

    set _price(value) {
        this.price = value;
    }

    turnOn() {
        this.isOn = true;
    }

    turnOff() {
        this.isOn = false;

        this.speed = 0;
    }

    accelerate(value) {

        this.acceleratedSpeed = value;

        if((this.speed + this.acceleratedSpeed) < this.maxSpeed) {

        this.speed += this.acceleratedSpeed;

        }
    }
    
    decelerate(value) {

        this.deceleratedSpeed = value;

        if ((this.speed - this.deceleratedSpeed) > 0) {

        this.speed -= this.deceleratedSpeed;

        }
    }

    drive(hours) {
        
        this.hours = hours;
        
        if (this.isOn === true) {

        this.distance += (this.hours * this.speed);

        } 
    }

}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000