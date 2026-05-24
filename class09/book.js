// Book class module

export class Book {
    constructor(title, author, available = true) {
        this.author = author ;
        this.title = title ;

        this.available = available;
    }

displayInfo() {
    return`${this.title} by ${this.author} | Available: ${this.available}`;
}

borrow(){
    if(this.available) {
        this.available = false;
        return `${this.title} borrowed`;
    }
   return `${this.title} Already borrowed`;
    }

returnBook(){
    this.available = true;
    return `${this.title} returned`;
}

toggle() {
    this.available = !this.available;
    return `${this.title} ${this.available}`;

}
}