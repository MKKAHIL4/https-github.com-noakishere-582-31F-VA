//promise
// javascript is often asynchronous a code that exutes at diff times ansync

console.log("Hello");
console.log("bye");

console.log("start");
setTimeout(() => {
    console.log("middle");
}, 1000); //somework is delayed here
console.log("End");

// letstransition to Promise
// when asynchronous programs becomne more comlex
//we want a need a clearer structure

//apromis lets say
//this work is happening
//it will eventually succed or fail
// based on n that it does something after

// we have an object type promise
//it represents a state promise state == resolved fulffilled
// it has a promise reuslt -- the string is in  this case
//n simpler words a promise is a value that is not ready yet
//but will be ready later -- or may fail


const promise = Promise.resolve(" hello from a resolved promise");
console.log(promise);

const failedPromise = Promise.reject(" hello from a resolved promise");
console.log(failedPromise);
// apromise had three states
//1. pending: still waiting
//2. fulffilled :completely successfull
//rejected :failed 

//visually :

    // pending-> fullfiled or pending --> rejected

// important conceptual distinction
const value = Promise.resolve(42)
// we are not giving
//42 directly
// we are making a 
// a ZPromise object
console.log(value);

//consum,ing promise with then () and .catch
// then () runs when the promise is fullfilled 
//it recives the result value!
//./catch() runs when the promise is rejected 
//ity recives the error or rejection reason

//basic reolved promise :
Promise.resolve("hello World").then((result) => {
    console.log(result);
});
//basic reject promise :
Promise.reject("failed to load").catch((error) => {
    console.log(error);
});
const success = true;
const myPromise = new Promise((resolve, reject) => {
    if(success) {
        resolve("Operation successfull");
    }else {
        reject("Operation Failed");
    }
});

myPromise.then((result) => {
    console.log("---------------");
    console.log(result);
})
.catch((error) => {
    console.log("---------------");
    console.log(error);
});
//IMPORTANT

//a PROMISE IS NOT M,AJIC
//ITS OFTEN WRAPPING ASYNCHRONOUS WORK
//SUCH AS TIMER, OR HTTP REQUEST, ETC....


//DELAYED SUCCESS OR FAILURE

const myPromise2 = new Promise((resolve, reject) => {
    if(success2 = true){
    setTimeout(() => {
        resolve("data Loaded")
    }, 1000);

}else {
    setTimeout(() => {
        reject("Data Didnt Load");

    },1000);
}
});

myPromise2.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
});

number = 10;

function checkNumber(newNumber){
    const promise = new Promise((resolve, reject) => {
        if(newNumber > 10) {
            resolve("Number is greater than 10")
        }else {
            reject("Number is 10 or less");
        }
    });
    return promise;
}

console.log("-------------");
let number = 10
let number2 = 15

checkNumber(number).then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
});

checkNumber(number2).then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
});

checkNumber(8).then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
});
