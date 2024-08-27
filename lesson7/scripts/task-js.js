// #XjJuucOMR0
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)


function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}


let user = [
    new User(1, 'Luffy', 'Monkey D.', 'Monkey.D.Luffy@pirates.com', '+25843811572'),
    new User(2, 'Zoro', 'Roronoa', 'RoronoaZoro@pirates.com', '+25842741572'),
    new User(3, 'Law', 'Trafalgar D. Water.', 'TrafalgarD.WaterLaw@pirates.com', '+12356811572'),
    new User(4, 'Kid', 'Eustass', 'EustassKid@pirates.com', '+258233811572'),
    new User(5, 'Bonney', 'Jewelry', 'JewelryBonney@pirates.com', '+2588870572'),
    new User(6, 'Apoo', 'Scratchmen', 'ScratchmenApoo@pirates.com', '+258346811572'),
    new User(7, 'Bege', 'Capone', 'CaponeBege@pirates.com', '+258409876572'),
    new User(8, 'Hawkins', 'Basil', 'BasilHawkins@pirates.com', '+251234572'),
    new User(9, 'Drake', 'X', 'XDrake@pirates.com', '+258443611572'),
    new User(10, 'Teach', 'Marshall D.', 'MarshallD.Teach@pirates.com', '+250347111572')
]

console.log(user)


// #2ikXsE2WiKZ
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)


function userParnyId(users) {

    return users.id % 2 === 0
}

console.log(user.filter(userParnyId));


// #pOeHKct
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)


let userIdSort = user.sort((a, b) => a.id - b.id);
console.log(userIdSort)

// #nkMXISv
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком
// товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let GrandLineArray = [
    new Client(1, 'Luffy', 'Monkey D.', 'Monkey.D.Luffy@pirates.com', '+25843811572', ['Meat on The Bone']),
    new Client(2, 'Zoro', 'Roronoa', 'RoronoaZoro@pirates.com', '+25842741572', ['Sake', 'Bear']),
    new Client(3, 'Law', 'Trafalgar D. Water.', 'TrafalgarD.WaterLaw@pirates.com', '+12356811572', ['Onigiri', 'Coffee']),
    new Client(4, 'Kid', 'Eustass', 'EustassKid@pirates.com', '+258233811572', ['Grilled Meat', 'Tomato Salad']),
    new Client(5, 'Bonney', 'Jewelry', 'JewelryBonney@pirates.com', '+2588870572', ['All Meat Pizza', 'Cheese Pizza', 'Cake']),
    new Client(6, 'Apoo', 'Scratchmen', 'ScratchmenApoo@pirates.com', '+258346811572', ['Ice Cream']),
    new Client(7, 'Bege', 'Capone', 'CaponeBege@pirates.com', '+258409876572', ['Cake']),
    new Client(8, 'Hawkins', 'Basil', 'BasilHawkins@pirates.com', '+251234572', ['Tea', 'Vine', 'Cheese']),
    new Client(9, 'Drake', 'X', 'XDrake@pirates.com', '+258443611572', ['Red Meat', 'Salad', 'Carry', 'Coffee']),
    new Client(10, 'Teach', 'Marshall D.', 'MarshallD.Teach@pirates.com', '+250347111572', ['Apple Pie', 'Beer'])
];

console.log(GrandLineArray)


// #8abtVjRv
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню.
// (sort)


let sortedOrders = GrandLineArray.sort((a, b) => a.order.length - b.order.length);
console.log(sortedOrders)


// #vV9a6584I5
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


function Car(carModel, carManufacturer, carReleaseYear, carMaxSpeed, carEngineV) {
    this.carModel = carModel;
    this.carManufacturer = carManufacturer;
    this.carReleaseYear = carReleaseYear;
    this.carMaxSpeed = carMaxSpeed;
    this.carEngineV = carEngineV;
    this.carDrive = function () {
        console.log(`їдемо зі швидкістю ${this.carMaxSpeed} на годину`);
    };
    this.carInform = function () {
        for (const autoInfo in this) {
            console.log(autoInfo, this[autoInfo])
        }
    };
    this.carIncreaseMaxSpeed = function (carNewSpeed) {
        if (carNewSpeed > 0) this.carMaxSpeed = carNewSpeed + this.carMaxSpeed;
    };
    this.carChangeYear = function (carNewValue) {
        if (carNewValue >= 1815) this.carReleaseYear = carNewValue;
    };
    this.carAddDriver = function (carDriver) {
        if (carDriver) this.driver = carDriver;
    };
}

const car = new Car('Mini', 'Nissan', 2015, 200, '8 cylinders');
console.log(car);
//ці функії не можу провірити в Edge. видає помилку.
car.carDrive()
car.carInform();
car.carIncreaseMaxSpeed(50);
car.carChangeYear(2020);
car.carAddDriver('Giotto');
console.log(car);


// #5kla3yMpgp
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна
// швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


class CarClass {
    constructor(model, manufacturer, releaseYear, MaxSpeed, engineV) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.releaseYear = releaseYear;
        this.maxSpeed = MaxSpeed;
        this.engineV = engineV;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    inform() {
        for (const autoInfo in this) {
            console.log(autoInfo, this[autoInfo])
        }
    }

    increaseMaxSpeed(newSpeed) {
        if (newSpeed > 0) this.maxSpeed = newSpeed + this.maxSpeed;
    }

    changeYear(newValue) {
        if (newValue >= 1815) this.releaseYear = newValue;
    }

    addDriver(driver) {
        if (driver) this.driver = driver;
    }

}

const carClas = new CarClass('Mini', 'Nissan', 2015, 200, '8 cylinders');
console.log(carClas);
//ці функії не можу провірити чомусь видає помилку.
carClas.drive();
carClas.inform();
carClas.increaseMaxSpeed(50);
carClas.changeYear(2020);
carClas.addDriver('Alaudi');
console.log(carClas);

// #zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

let princess = [
    new Cinderella('Avrora', 17, 38),
    new Cinderella('SnowWhite', 15, 36),
    new Cinderella('Anna', 16, 38),
    new Cinderella('Elza', 18, 37),
    new Cinderella('Mulan', 18, 36),
    new Cinderella('Ciderella', 17, 37),
    new Cinderella('Moana', 16, 39),
    new Cinderella('Pocahontas', 19, 39),
    new Cinderella('Ariel', 16, 37),
    new Cinderella('Merida', 15, 38),
]

class Prince {
    constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }
}

let prince = new Prince('Fillip', 18, 37);

const princesName = princess.find(name =>name.footSize === prince.shoeSize && name.age === prince.age);

console.log(prince);
console.log(princesName);


// #gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter

Array.prototype.testForEach = function (callback) {
    const myArray = this;
    for (const element of myArray) {
        callback(element);
    }
};
['advav',9846, true].testForEach((x)=>console.log(x));

Array.prototype.testFilter = function (predicate) {
const array=[]
    for (const arrayElement of this) {
        if (predicate(arrayElement)){
            array.push(arrayElement);
        }
    }
    return array;
};

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

let test = users.testFilter((user)=>user.status);
console.log(test)