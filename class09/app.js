import { greet, farewell } from "./greetings.js";
import { toUpper, addExclamation } from "./utils.js";
import {showCard } from "./ui.js";

const btn = document.getElementById("runBtn");

let greeted = false
btn.addEventListener("click", () => {
    let message;

    if(!greeted) {
        message = greet("Alice");
        greeted = true;
    }else {
        message = farewell("Alice");
        greeted = false;
    }

    message = toUpper(message);
    message = addExclamation(message);
    
    showCard (message);
});