//variables!
//let && const
// let gives us the possibility to change a value
let number = 10;
number = number +1;

console.log(number);
//const means the variable should not change
const courseName = "Web Interface Programming 2";
// courseName = "kaymar"; constant cannot be changed
console.log(courseName);

//arrays
let numbers = [1, 2, 3];
numbers.push(4); // adding a new element
console.log(numbers);

// in this case an array is assigned to const grades
//we cannot change the variables grades itself
// but we can manipulate the array
const grades = [80, 90, 100];
grades.push(75);// we are not changing the variable we are just using function of our array
console.log(grades);

// js object 
// const student = {
//     name: "sam",
//     grade: 85,
// };

// console.log(student);
// console.log(student.name);
// console.log(student.grade);

// student.name = "john";
// console.log(student.name);


//block scope
a = 5;

if(a == 5) {
    let message = "You guessed the number right!!!";
    console.log(message);
} 

// this wouldnt work because message is in the conditional scope and not accessible
//console.log(message);

function showUser() {
    const username = "Mina";
    console.log(`${username} is logged in !`);
}

showUser();
// WARNING: this wouldnt work, because username is in the function scope and not accessible
//console.log(username);
//let or const
let page = 1; // page can change
const maxItems = 20; // max item could not change
const categories = ["movies", "books"]; //categ also stay the same

// functions
//  //function greetUser(name){ // this is a void function
//     console.log("Hello, " + name + "I hope you are good");
//  }

//  const name = "Nora";
//  greetUser(name);

 function add(a, b) { // this is a rturn function
    return a + b;
 }
const result = add(3, 5);
console.log("result is : " + result);

// a void function executes whatever its suppose to but it doesnt return any values hence it cant be assigned to a variable

// let a = greetUser() doesn't work, since greetUser doesnt return anything.

// but a return function can be assigned to a variable because it returns a value.!

let number1 = add(10, 20);

//mini exercise

const name = "Jane";
const lastName = "Doe";


//1. write a return function that adds name and last name with a space and returns it to full Name
//2. write a function that greets the user calling their full name

function getFullName(first, last){
    let fullName = name + " " + lastName;
    return first + " " + last;
}

const fullName = getFullName(name, lastName);

function greetUser(fullName) {
    console.log("Hello, " + fullName + "!");
}
greetUser(fullName);

// one responsibility per function

function calculateTotal(price, quantity){
    return price * quantity;
}

function formatPrice(amount){
    return "$" + amount.toFixed(2);
}

const totalPrice = calculateTotal(20.99, 3);

console.log(totalPrice);
console.log(formatPrice(totalPrice));

// arrays and loops
const friutes = ["apple", "banana", "orange"];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits.length);
console.log(fruits[fruits.length-1]);

// lets loop through an arraY

fruits.forEach((fruit) => console.log(fruit)); // lambda
// call back function
fruits.forEach(function (fruit){
    console.log(fruit)
});
// for loop
for (const fruit of fruits){
    console.log(fruit);
}

// with indexes loop:
for (let i = 0; i < fruits.length; i++) {
    if( i == 1) {
        console.log(fruits[i]);
    }
}

// while loop
let index = 0;
while(index < fruits.length){
    console.log(fruits[index]);
    index ++;
}

//find function

const prices = [10, 20, 30, 40];
const firstBigPrice = prices.find(function (price) {
    return price > 25;
});

console.log(firstBigPrice);

// filter function 
//creates an array of all elements
//that pass the condition within the array.
const expensivePrices = prices.filter(function (price){
    return price > 25;
});
console.log("Filter Function: ");
console.log(expensivePrices);

// map function
//transforms each elemnt of the array and stores it in a new array
const formattedPrices = prices.map(function (price){
    return "$" + price;
});

console.log(formattedPrices);

// objects
const product = {
    name: "keyboard",
    price: 49.99,
    inStock: true,
    describe: function(){
        return this.name + "costs $" + this.price;
    },
};

console.log(product.name);
console.log(product.describe());
