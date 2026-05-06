//asynchronous vs synchronous
// lets look at normal sequential code

console.log("Start");
console.log("Middle");
console.log("End");

// in a sequential manner code runs in order
// each line computes completes before the next one

// now we look at deffered execution

console.log("Start");//
// we could use setTimeout(), to run the code
// after certain amount of time 
setTimeout(() => {
    console.log("Middle");
}, 1000); // in this case the function inside setTimeout() runs after 1000ms delay

console.log("End");

console.log("===========");
console.log("call back function");

function sayHello(name) {
    console.log("Hello " + name);
}
sayHello("Jane");

function doSomethingLater(callback){
    console.log("doing setup ....");
    console.log("Loading...");

    callback();// the argument/parameter call back is a function not an integer or any other data type
}
// we have to pass the function as an argument to the doSomethingLater function
doSomethingLater(() => {
    //sayHello("Jane");
    console.log("Hello"); // this is our argument
});
// in this case of a callback our function needs to be wrapped around an arrow function
// functionName(() => {
    // whatever you want to do.
//    });

// a continuation is the next peice of work the program should do.
// it is often represented as a function to run later 

// **********dom review
//const title = document.querySelector('#title');
const title = document.getElementById("title");

const description = document.getElementsByClassName(".description")

const output = document.getElementById("output");

console.log(title);
console.log(description);
console.log(description.textContent);
console.log(output);

//to update DOM content
output.textContent = " I would like to have a chocolate"

const topics = ["Big Ben", "Statue of Liberty", "Pyramids"];
const topicList = document.getElementById("topic-list");

for(let topic of topics){
    // create our element
    const li = document.createElement("li");
    // we add the list item as a text to our element
    li .textContent = topic;
    // add list item to our 'ul'
    topicList.appendChild(li);
}
// event handling

const button = document.getElementById("my-button");
console.log(button);

// we can have functions triggered by specific events we can do so by using addvent listerner

// in this case our event is click on our button
// button.addEventListener("click", () => {
//     console.log("button clicked.");
//     output.textContent = "Oh Hello There!";
// });

// the example above is also continuation/ callback!!


// now let's read an input on click!

const nameInput = document.getElementById("name-input");

button.addEventListener("click", () => {
    const name = nameInput.value.trim();
    output.textContent = "Oh hello " + name;
});

// input event
const previewOutput = document.getElementById("preview-output");
// typing input as event
nameInput.addEventListener("input", () => {
    console.log("typing..");
    previewOutput.textContent = `Typing ${nameInput.value}`;
});
