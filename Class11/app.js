//class #11 Inheritance - web interface

//part1: Animal Parent constructor
function Animal(name){
    this.name = name;

}
Animal.prototype.describe = function () {
    return`This animal is named ${this.name}`;
};

//challenge #2

Animal.prototype.kingdom = "Animalia - Living Organisms";

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
//#challnge 1 override
Dog.prototype.describe = function() {
    return`${this.name}, the ${this.breed}, is a loyal and fun compainion.`
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
//challenge2 
Vehicle.prototype.type = "Transport";
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
ElectricCar.prototype.constructor = ElectricCar;

//Electric car - specific method

ElectricCar.prototype.charge = function () {
    this.batteryLevel = 100;
    return `${this.model} : is fully charged`;
};

//part7 class syntax version

class AnimalClass {
    constructor(name){
        this.name = name
    }

    describe() {
        return`This animal is named ${this.name}`;
    }
}

class DogClass extends AnimalClass {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    bark() {
        return `${this.name} barks`;
    }
}

//Part8--Button Output

const runDemoBtn = document.getElementById("run-demo-btn");

const output = document.getElementById("output");
runDemoBtn.addEventListener("click", () => {
    //craeting objects
    const dog1 = new Dog("Micky", "Poodel");
    const cat1 = new Cat("Easy", "Black");
    const car1 = new Car("X5", "BMW");
    //testing challenge2 
    console.log(car1.type);//challnege #2
    console.log(dog1.kingdom);//challnege #2


    const electric1 = new ElectricCar("Tesla", "Model 3", 45);

    //class syntax object
    const dog2 = new DogClass("Ralph", "German Sheperd");


//OUTPUT TO PAGE
output.innerHTML = `
    <div class="section">
        <h2>Dog Example</h2>
        <p>${dog1.kingdom}</p>
        <p>${dog1.describe()}</p>
        <p>Breed: ${dog1.breed}</p>
        <p>${dog1.bark()}</p>
    </div>
<hr></hr>

    <div class="section">
            <h2>Cat Example</h2>
           
            <p>${cat1.describe()}</p>
            <p>Color: ${cat1.color}</p>
            <p>${cat1.meow()}</p>
    </div>

    <hr></hr>

    <div class="section">
            <h2>Car Example</h2>

            <p>${car1.describe()}</p>
            <p>${car1.showModel()}</p>
            <p>${car1.start()}</p>
            <p>${car1.stop()}</p>
            <p>Type: ${car1.type}</p>

    </div>
        
        <hr></hr>

    <div class="section">
            <h2>Electric car Example Example</h2>

            <p>${electric1.describe()}</p>
            <p>${electric1.showModel()}</p>
            <p>Battery level is : ${electric1.batteryLevel} %</p>
            <p>${electric1.charge()}</p>

    </div>

        <hr></hr>

    <div class="section">
            <h2>Class Syntax Example</h2>

            <p>${dog2.describe()}</p>
            <p>${dog2.bark()}</p>

    </div>
`;
// check if inheritance is functional

console.log(
    Object.getPrototypeOf(Dog.prototype) === Animal.prototype);

console.log(
    Object.getPrototypeOf(Car.prototype) === Vehicle.prototype);

console.log(
    Object.getPrototypeOf(ElectricCar.prototype) === Car.prototype);


console.log(dog1.describe());
console.log(cat1.describe());
console.log(car1.describe());

console.log(dog1.bark());
console.log(cat1.meow());
console.log(electric1.charge());
});
