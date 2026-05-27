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
