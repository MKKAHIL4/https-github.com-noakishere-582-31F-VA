function Book(title, author, available = true) {
    this.title = title;
    this.author = author;
    this.available = available;
}

//prototype methods

Book.prototype.displayInfo = function() {
    return `${this.title} by ${this.author} | Available: ${this.available}`;
};
Book.prototype.borrow = function() {
if(this.available){
    this.available = false;
    return `${this.title} has been borrowed`;
}
 return `${this.title}  is already borrowed`;
};

Book.prototype.returnBook = function() {
    this.available = true;
    return `${this.title} has been returned`;
};

Book.prototype.toggleAvailability = function() {
    this.available = !this.available;
    return `${this.title} availability ${this.available}`;
};


// data and info
const books = [
    new Book("CleanCode", "RobertC Martin"), 
    new Book("Eloquent JavaScript", "Marjin Haverbeke", false), 
    new Book("You Dont Know JS","Kyle Simon"), 
    new Book("The Pragmatic Programmer", "Andrew Hunt" ), 

]

//dom
const libraryDiv = document.getElementById("library");
const toast = document.getElementById("toast");
const toastMessage = document.getElementById("toastMessage");
const archiveLog = document.getElementById("archiveLog");

//store history
let logs = [];

//Toast Function 
function showToast(message) {
    toastMessage.textContent = message;
    toast.classList.add("show");

setTimeout(() => {
    toast.classList.remove("show")
}, 3000);
}

// archive function 
function addToArchive(message) {
    logs.push(message);
    archiveLog.textContent = logs.join("\n\n");
} 

// render books
function renderBooks(){
    libraryDiv.innerHTML = "";

    books.forEach((book => {
        const div = document.createElement("div");
        div.className = "book";

    div.innerHTML = `
        <h3>${book.title}</h3>
        <p>${book.displayInfo()}</p>

        <button class="borrow">Borrow</button>
        <button class="return">Return</button>
        <button class="toggle">Toggle</button>
     `;

     div.querySelector(".borrow").onclick = () => {
        const msg = book.borrow();
        showToast(msg);
        addToArchive(msg);
        renderBooks();
     };
    
      div.querySelector(".return").onclick = () =>  {
        const msg = book.returnBook();
        showToast(msg);
        addToArchive(msg);
        renderBooks();
     };
    
    
      div.querySelector(".toggle").onclick = () => {
        const msg = book.toggleAvailability();
        showToast(msg);
        addToArchive(msg);
        renderBooks();
     };
     
    libraryDiv.appendChild(div);
    }));
}
renderBooks();
