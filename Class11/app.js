//class #11 Inheritance - web interface

//part1: Animal Parent constructor
function Animal(name){
    this.name = name;

}
Animal.prototype.describe = function () {
    return`This animal is named ${this.name}`;
}

//Part2 Dog child Constructor:

function Dog(name, breed) {
    Animal.call(this, name);

    this.breed = breed;
}

//Inheritance connection 
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.connstructor = Dog;

//Reset Constructor
Dog.prototype.bark = function() {
    return `${this.name} barks loudly`;
}

//