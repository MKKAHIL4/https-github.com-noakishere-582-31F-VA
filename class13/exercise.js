class Book {
    constructor(title, pages) {
        this.title = title;
        this.pages = pages;
    }

    //summary computed not stored
    get summary(){
        return `${this.title} has ${this.pages} pages`;
    }

    set pages(value) {
        if (Book.isValidPageCount(value)) {
            this.__pages = value;
        } else {
            throw new Error("Invalid page count");
        }
    }

    get pages() {
        return this.__pages;
    }

    static isValidPageCount(value) {
        return typeof value === "number" && value > 0;
    }
}

const book1 = new Book("Beyond the horizon", 250);
console.log(book1.summary)

book1.pages = 400;
console.log(book1.pages);

console.log("\n=====================end of class book ========\n");
class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }

    set balance(value) {
        if (BankAccount.isValidAmount(value)) {
            this.__balance = value;
        } else {
            throw new Error("Balance cannot be Negative");
        }
    }

    get balance() {
        return this.__balance;
    }

    static isValidAmount(value) {
        return typeof value === "number" && value >= 0;
    }
}

const account1 = new BankAccount("Micheal", 650);
console.log(account1.balance)

account1.balance = 750;
console.log(account1.balance);
console.log("\n=====================end of class Bank Acoount ========\n");

class Course {
    static schoolName = "Vanier College";

    constructor(title, credits){
        this.title = title;
        this.credits = credits;
    }

    get label() {
        return`${Course.schoolName} -- ${this.title} : ${this.credits} credits`;
    }

    set credits(value) {
        if (value > 0) {
            this.__credits = value;
        }else {
            throw new Error ("Credits must be positive");
        }
        
    }

    get credits() {
        return this.__credits;
    }
}

const course1 = new Course("JavaScript", 3);
console.log(course1.label);
console.log(Course.schoolName);

console.log("\n=====================end of class Course ========\n");

class Movie {
    constructor(title, rating){
        this.title = title;
        this.rating = rating;
    }

    get description() {
        return`${this.title} has a rating of ${this.rating}`;
    }

    set rating(value) {
        if (Movie.isValidRating(value)) {
            this.__rating = value;
        }else {
            throw new Error ("Rating must be between 0 and 10");
        }
        
    }

    get rating() {
        return this.__rating;
    }

    static isValidRating(value) {
        return typeof value === "number" && value >= 0 && value <= 10;
    }
}


const movie1 = new Movie("Inception", 9);

console.log(movie1.description);

movie1.rating = 10;
console.log(movie1.rating);

console.log(Movie.isValidRating(8));
console.log(Movie.isValidRating(15));


console.log("\n===================== the end of the exercise========\n");