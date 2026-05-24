const output = document.getElementById("output");

let timeoutId;

export function showCard(message) {
    clearTimeout(timeoutId); //clear timer


output.classList.remove("show");

setTimeout(() => {
    output.textContent = message;
    output.classList.add("show");

    //auto hide when pops
    timeoutId = setTimeout (() => {
        output.classList.remove("show");
    }, 3000);
}, 50);
}
