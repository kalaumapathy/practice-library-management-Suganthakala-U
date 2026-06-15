
/* You are tasked with designing a library management system. The library
lends out various types of items such as books, DVDs, and magazines. While
all items share some common properties (e.g., title, id, isAvailable), each
type has unique properties and behaviors. For example:
● Books have an author and a genre.
● DVDs have a director and duration.
● Magazines have an issueNumber and publisher.
Tasks
1. Step 1: Create a Base Class
○ Define a class LibraryItem to represent shared properties
(title, id, isAvailable) and methods (e.g., checkOut() and
returnItem()).
2. Step 2: Extend the Base Class
○ Create child classes Book, DVD, and Magazine that inherit from
LibraryItem.
○ Add unique properties and methods for each child class:
■ Book: Add properties like author and genre.
■ DVD: Add properties like director and duration.
■ Magazine: Add properties like issueNumber and publisher.
3. Step 3: Instantiate Objects
○ Create instances of each class and test the shared and unique
methods.
1
4. Step 4: Test the Inheritance
○ Use inherited methods like checkOut() and returnItem() to
manage the availability of items.
○ Test accessing and displaying unique properties of each child
class
 */

class LibraryItem {
    constructor(title, id, isAvailable = true) {
        this.title = title;
        this.id = id;
        this.isAvailable = isAvailable;
    }

    checkOut() {
        this.isAvailable = false;
    }

    returnItem() {
        this.isAvailable = true;
    }
}



class Book extends LibraryItem {
    constructor(title, id, author, genre) {
        super(title, id);
        this.author = author;
        this.genre = genre;
    }
}

class DVD extends LibraryItem {
    constructor(title, id, director, duration) {
        super(title, id);
        this.director = director;
        this.duration = duration;
    }
}


class Magazine extends LibraryItem {
    constructor(title, id, issueNumber, publisher) {
        super(title, id);
        this.issueNumber = issueNumber;
        this.publisher = publisher;
    }
}

let book1 = new Book("JS Basics", 1, "John", "Programming");
let dvd1 = new DVD("Inception", 2, "Nolan", 148);
let mag1 = new Magazine("Tech Today", 3, 45, "TechPub");

// checkout items
book1.checkOut();
dvd1.checkOut();

// return items
book1.returnItem();

// check values
console.log(book1);
console.log(dvd1);
console.log(mag1);