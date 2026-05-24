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