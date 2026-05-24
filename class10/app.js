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
    this.available = !this.available
    return `${this.title} availabilty ${this.available}`;
};


// data and info
const books = [
    new Book("CleanCode", "RobertC Martin"), 
    new Book("Eloquen Java Script", "Marjin Haverbeke"), 
    new Book("You Dont Know JS","Kyle Simon"), 
    new Book("The Pragmatic Programmer", "Andrew Hunt" ), 

]

//dom
const librarydiv = document.getElementbyId("library");
const toast = document.getElementbyId("toast");
const toastMessage = document.getElementbyId("toastMessage");
const archiveLog= document.getElementbyId("archiveToast");

//store history
let logs [];