const output = document.getElementById("output");


//show animated card
export function showCard(message) {
    output.classList.remove("show");
    output.textContent = message;
    output.classList.add("show");
}
    setTimeout(() => {
      output.classList.remove("show"); 
    }, 3000);


//convert to upper case
export function toUpper(text) {
    return text.toUpperCase();
}

//add exclamation marks
export function addExclamation(text) {
    return text + "!!!!!!!!";
}