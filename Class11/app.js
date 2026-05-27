//class #11 Inheritance - web interface

//part1: Animal Parent constructor
function Animal(name){
    this.name = name;

}
Animal.prototype.describe = function () {
    return`This animal is named ${this.name}`;
};

//Part2 Dog child Constructor:

function Dog(name, breed) {
    Animal.call(this, name);

    this.breed = breed;
}

//Inheritance connection 
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

//Reset Constructor
Dog.prototype.bark = function() {
    return `${this.name} barks loudly`;
};

//part3: cat Child Constructor

function Cat(name, color) {
    Animal.call(this, name);

    this.color = color;
}
//Inheritance connection
Cat.prototype = Object.create(Animal.prototype);

//reset constructor
Cat.prototype.constructor = Cat;

//Cat Specified method
Cat.prototype.meow = function () {
    return `${this.name} meow`;
};

//part4 Vehicle parent Constructor
function Vehicle(brand) {
    this.brand = brand;
}

Vehicle.prototype.describe = function () {
    return `Vehicle Brand: ${this.brand}`;
};

//part5 Car child constructor
function Car(brand, model, running = false){
    Vehicle.call(this, brand);

    this.model = model;
    this.running = running;
}

//inheritance connection
Car.prototype = Object.create(Vehicle.prototype);

//Reset Constructor
Car.prototype.constructor = Car;

//Car specific-methods
Car.prototype.start = function() {
    this.running = true;

    return `${this.model} is running`;
};

Car.prototype.stop = function() {
    this.running = false;

    return `${this.model} has stopped`;
};

Car.prototype.showModel = function() {
    return `Model: ${this.model}`;
};

// part 6 Electric car Child Constructor

function ElectricCar(brand, model, batteryLevel) {

    //call parent constructor
    Car.call(this, brand, model);

    this.batteryLevel = batteryLevel;
}
//inheritance connection
ElectricCar.prototype = Object.create(Car.prototype);

//Electric car - specofic method

ElectricCar.prototype.charge = function () {
    this.batteryLevel = 100;
    return `${this.model} is fully charged`;
};

