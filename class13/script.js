//getters, setters, statics

//what is a getter?
// agetter lets an object expose a value as if it were a property
//eventhough the code itself might run behind the scenes

class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
     get fullName() {
            return `${this.firstName} ${this.lastName}`;
}

}
// a getter function
       
const p1 = new Person("Mia", "cloud");
console.log(p1.firstName + p1.lastName)

class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
       // this.area = width * height;//area is stored inside the class
        //dont use this to save the area because it changes, here with this is one time thing 
    }

    //area is not stored directly. it's computed
    // use the get because the value might change
    get area() {
        return this.width * this.height;
    }
}
const rect = new Rectangle(4, 5);
console.log(rect.area);


// why getters are useful?

// in case, a value should be computed from other values
// in case, (encouraged) you want cleaner syntax
//in case, you want to hide implementation details

// **
// Setters
//*/

// a setter lets you control what happens when someone
// assigns a value.

class Product {
    constructor(name, price) {
        this. name = name;
        this.price = price;
    }

    set price(value) {
        if (value < 0) {
            throw new Error("Price cannot be negative")
        }
        this.__price = value;
    }

    get price() {
        return this.__price;
    }
}

const product1 = new Product("Keyboard" -49.99);
console.log(product1.price);
product1.price = 60;//setter assigning "setting "a value 
console.log(product1.price);// getter getting a value
// product1.price = -160; //this throws an error
// console.log(product1.price);

class User {
    constructor(username) {
        this. username = username;
    }
// setter here allows to have full control
// over how the value is being treated and then assigned.
    set username(value) {
        this .__username = value.trim();// .trim removes all the empty space from both ends of our string
}
    get username() {
        return this .__username;
    }
}
const u1 = new User("  t-rex ")
console. log(u1.username);
    


class Bug {
    constructor(name) {
        this.name = name;
    }
    set name(value) {
        this.__name = value; // recursive call!
        //this is ok 
    }
    
    get name(){
        //return this.name; //recursive call
        return this.__name;//this is ok
    }
}
bug = new Bug("hi"); // throws an error if there are no setters
console.log(bug.name);

//static properties

/**
 * Static properties and Methods 
 * static members belong to the class itself and not to the individual objects
 * 
 * they are used like: ClassName.member
 * and not : isntance.member
 * 
 * static methods and properties ahelp us to use
 * in defferent situations
 * mostyl used as helper functions
 * 
 * PAY ATTENTION CONST HELPER = new MathHelper(),
 * HELPER.ADD(2,3)/ THIS WOULD THROW AN ERROR BECAUSE THE METHOD BELONGS TO THE CLASS.
 */

class MathHelper {
    //add belongs to the class and not to any one mATHhELPER oBJECT;
    static add(a, b) {
        return a + b;
    }
}
result = MathHelper.add(2,3);
console.log(result);



class Student
{
    static counter = 0;

    constructor(name) {
       this.name = name;// this belongs to the object
       //this.counter +=1; // this would only update once
       Student.counter += 1;// student belongs to the class
    }
}
const s1 = new Student("Jane");
const s2 = new Student("Joe");

console. log(`We have a total of ${Student.counter} students`);