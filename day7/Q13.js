"use strict";
//-----------------Question: 13-----------------------------------
class Book {
    constructor(title, author, publicationYear, genre) {
        this.title = title;
        this.author = author;
        this.publicationYear = publicationYear;
        this.genre = genre;
    }
    bookDetails() {
        console.log(`Title: ${this.title}`);
        console.log(`Author: ${this.author}`);
        console.log(`Publication Year: ${this.publicationYear}`);
        console.log(`Genre: ${this.genre}`);
    }
    isRecentPublication() {
        let currentYear = new Date().getFullYear();
        return currentYear - this.publicationYear <= 5;
    }
    changeGenre(newGenre) {
        this.genre = newGenre;
    }
    isAuthor(authorName) {
        return this.author === authorName;
    }
}
let book = new Book("Best TypeScript Books to Learn Type Subset in 2021", "Jane Smith", 2021, "Programming");
//   book.bookDetails()
//Change the genre of the book
book.changeGenre("Technical Writing");
book.bookDetails();
// Check if the book is a recent publication
console.log(`Is recent publication: ${book.isRecentPublication()}`);
// Check if the book's author matches a given author name
console.log(`Is the author Jane Smith? ${book.isAuthor("Jane Smith")}`);
console.log(`Is the author John Doe? ${book.isAuthor("John Doe")}`);
