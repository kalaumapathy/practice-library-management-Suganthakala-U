// =========================
// Base Class
// =========================
class LibraryItem {
    constructor(title, id, isAvailable = true) {
        this.title = title;
        this.id = id;
        this.isAvailable = isAvailable;
    }

    checkOut() {
        if (!this.isAvailable) {
            console.log(` "${this.title}" is already checked out.`);
            return;
        }
        this.isAvailable = false;
        console.log(` "${this.title}" has been checked out.`);
    }

    returnItem() {
        if (this.isAvailable) {
            console.log(` "${this.title}" was not checked out.`);
            return;
        }
        this.isAvailable = true;
        console.log(` "${this.title}" has been returned.`);
    }

    describe() {
        console.log(
            `Item: ${this.title} | ID: ${this.id} | Available: ${this.isAvailable}`
        );
    }
}

// =========================
// Book Class
// =========================
class Book extends LibraryItem {
    constructor(title, id, author, genre) {
        super(title, id);
        this.author = author;
        this.genre = genre;
    }

    describe() {
        console.log(
            `Book: "${this.title}" by ${this.author} | Genre: ${this.genre} | Available: ${this.isAvailable}`
        );
    }
}

// =========================
// DVD Class
// =========================
class DVD extends LibraryItem {
    constructor(title, id, director, duration) {
        super(title, id);
        this.director = director;
        this.duration = duration;
    }

    describe() {
        console.log(
            ` DVD: "${this.title}" directed by ${this.director} | Duration: ${this.duration} mins | Available: ${this.isAvailable}`
        );
    }
}

// =========================
// Magazine Class
// =========================
class Magazine extends LibraryItem {
    constructor(title, id, issueNumber, publisher) {
        super(title, id);
        this.issueNumber = issueNumber;
        this.publisher = publisher;
    }

    describe() {
        console.log(
            ` Magazine: "${this.title}" Issue #${this.issueNumber} published by ${this.publisher} | Available: ${this.isAvailable}`
        );
    }
}

// =========================
// Objects
// =========================
let book1 = new Book("JavaScript Basics", 1, "John Doe", "Programming");
let dvd1 = new DVD("Inception", 2, "Christopher Nolan", 148);
let mag1 = new Magazine("Tech Today", 3, 45, "TechPub");

// =========================
// Testing describe()
// =========================
book1.describe();
dvd1.describe();
mag1.describe();

console.log("\n--- Checkout Operations ---");

// =========================
// Checkout Tests (with validation)
// =========================
book1.checkOut();  // success
book1.checkOut();  // duplicate checkout (validation)

dvd1.checkOut();

console.log("\n--- Return Operations ---");

book1.returnItem(); // success
book1.returnItem(); // invalid return

console.log("\n--- Final State ---");

book1.describe();
dvd1.describe();
mag1.describe();