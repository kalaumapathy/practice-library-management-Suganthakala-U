/* // ===============================
// BASE CLASS
// ===============================
class LibraryItem {
    constructor(title, id, isAvailable = true) {
        this.title = title;
        this.id = id;
        this.isAvailable = isAvailable;
    }

    // Method to checkout item
    checkOut() {
        if (this.isAvailable) {
            this.isAvailable = false;
            console.log(`${this.title} has been checked out.`);
        } else {
            console.log(`${this.title} is currently not available.`);
        }
    }

    // Method to return item
    returnItem() {
        if (!this.isAvailable) {
            this.isAvailable = true;
            console.log(`${this.title} has been returned.`);
        } else {
            console.log(`${this.title} was already available.`);
        }
    }

    // Display basic info
    getInfo() {
        return `
ID: ${this.id}
Title: ${this.title}
Available: ${this.isAvailable}
        `;
    }
}

class Book extends LibraryItem {
    constructor(title, id, author, genre) {
        super(title, id);
        this.author = author;
        this.genre = genre;
    }

    getBookDetails() {
        return `
--- BOOK ---
${this.getInfo()}
Author: ${this.author}
Genre: ${this.genre}
        `;
    }
}


class DVD extends LibraryItem {
    constructor(title, id, director, duration) {
        super(title, id);
        this.director = director;
        this.duration = duration; // in minutes
    }

    getDVDDetails() {
        return `
--- DVD ---
${this.getInfo()}
Director: ${this.director}
Duration: ${this.duration} minutes
        `;
    }
}

class Magazine extends LibraryItem {
    constructor(title, id, issueNumber, publisher) {
        super(title, id);
        this.issueNumber = issueNumber;
        this.publisher = publisher;
    }

    getMagazineDetails() {
        return `
--- MAGAZINE ---
${this.getInfo()}
Issue Number: ${this.issueNumber}
Publisher: ${this.publisher}
        `;
    }
}

//CREATE OBJECTS (TESTING)

// Books
let book1 = new Book("JavaScript Basics", 101, "John Smith", "Programming");

// DVDs
let dvd1 = new DVD("Inception", 201, "Christopher Nolan", 148);

// Magazines
let mag1 = new Magazine("Tech Today", 301, 45, "Tech Media Inc");




// TEST INHERITANCE METHODS

// Checkout items
book1.checkOut();
dvd1.checkOut();

// Try checking out again
book1.checkOut();

// Return items
book1.returnItem();
dvd1.returnItem();

// DISPLAY DETAILS
console.log(book1.getBookDetails());
console.log(dvd1.getDVDDetails());
console.log(mag1.getMagazineDetails()); */

/* 
const input = require("readline-sync");

class LibraryItem {
    constructor(title, id) {
        this.title = title;
        this.id = id;
        this.isAvailable = true;
    }

    checkOut() {
        this.isAvailable = false;
    }

    returnItem() {
        this.isAvailable = true;
    }
}

class Book extends LibraryItem {
    constructor(title, id, author) {
        super(title, id);
        this.author = author;
    }
}

class DVD extends LibraryItem {
    constructor(title, id, director) {
        super(title, id);
        this.director = director;
    }
}

let library = [];

function addItem() {
    let title = input.question("Title: ");
    let id = input.question("ID: ");
    let item = new Book(title, id, "Author");
    library.push(item);
}

function viewItems() {
    console.log(library);
} */



    const input = require("readline-sync");

// --------------------
// BASE CLASS
// --------------------
class LibrayItemPractice1{
    constructor(title, id) {
        this.title = title;
        this.id = id;
        this.isAvailable = true;
    }

    checkOut() {
        this.isAvailable = false;
        console.log(this.title + " is checked out");
    }

    returnItem() {
        this.isAvailable = true;
        console.log(this.title + " is returned");
    }
}

class Book extends LibrayItemPractice1 {
    constructor(title, id, author) {
        super(title, id);
        this.author = author;
    }
}

class DVD extends LibrayItemPractice1 {
    constructor(title, id, director) {
        super(title, id);
        this.director = director;
    }
}

class Magazine extends LibrayItemPractice1 {
    constructor(title, id, issue) {
        super(title, id);
        this.issue = issue;
    }
}

let library = [];  // store all items

function addItem() {
    let type = input.question("Book, DVD, or Magazine? ");

    let title = input.question("Enter title: ");
    let id = input.question("Enter id: ");

    let item;

    if (type === "Book") {
        let author = input.question("Enter author: ");
        item = new Book(title, id, author);
    } 
    else if (type === "DVD") {
        let director = input.question("Enter director: ");
        item = new DVD(title, id, director);
    } 
    else {
        let issue = input.question("Enter issue: ");
        item = new Magazine(title, id, issue);
    }

    library.push(item);
    console.log("Item added!");
}

function viewItems() {
    console.log(library);  // view items

}

function checkOutItem() {
    let id = input.question("Enter id: ");

    for (let item of library) {
        if (item.id === id) {
            item.checkOut();
        }
    }
}


function returnItem() {
    let id = input.question("Enter id: ");

    for (let item of library) {
        if (item.id === id) {
            item.returnItem();
        }
    }
}

function menu() {
    console.log("\n1. Add Item");
    console.log("2. View Items");
    console.log("3. Check Out");
    console.log("4. Return");
    console.log("5. Exit");
}


function run() {
    let running = true;

    while (running) {
        menu();
        let choice = input.question("Choose: ");

        if (choice == 1) addItem();
        else if (choice == 2) viewItems();
        else if (choice == 3) checkOutItem();
        else if (choice == 4) returnItem();
        else if (choice == 5) running = false;
    }

    console.log("Goodbye!");
}

run();