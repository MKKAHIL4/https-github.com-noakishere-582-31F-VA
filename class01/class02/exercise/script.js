
// load in dom elements
const nameInput = document.getElementById("name-input");
const greetButton = document.getElementById("greet-button");
const output = document.getElementById("output");

//2. add an evvent listener to button
greetButton.addEventListener("click", function () {

    //1. take input value and trim it
    const name = nameInput.value.trim();

    //2. condition
    if (name === "") {
        output.textContent = "Please enter doSomethingLater";
        return;
    }

    output.textContent= "Loading...";

    // after 1000 ms update the output with :
    setTimeout(function () {
        output.textContent = `say hello, ${name}`;
    }, 1000);
});

// load in dom elements

//name input
//greet button
//output 

//2. add an evvent listener to button
// continuation function for it should be:

//1. take input value and trim it

//2. condition
// validate that the input is on an empty string
//if it is  --> update output text to :
//please enter doSomethingLater

//3. after 1000 ms update the output with :
//sayHello, Input Value