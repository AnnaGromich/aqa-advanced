// клас 
class Book {
    #title;
    #author;
    #year;

    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    get title() {
        return this.#title;
    }

    set title(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            throw new TypeError('Назва книги має бути непорожнім рядком');
        }
        this.#title = value.trim();
    }

    get author() {
        return this.#author;
    }

    set author(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            throw new TypeError('Автор має бути непорожнім рядком');
        }
        this.#author = value.trim();
    }

    get year() {
        return this.#year;
    }

    set year(value) {
        const currentYear = new Date().getFullYear();
        if (!Number.isInteger(value) || value < 1 || value > currentYear) {
            throw new RangeError(`Рік видання має бути цілим числом від 1 до ${currentYear}`);
        }
        this.#year = value;
    }

    //method
    printInfo() {
        console.log(`Книга: "${this.title}", автор: ${this.author}, рік видання: ${this.year}`);
    }

    static findOldest(books) {
        if (!Array.isArray(books) || books.length === 0) {
            throw new TypeError('Потрібно передати непорожній масив книг');
        }
        if (!books.every((book) => book instanceof Book)) {
            throw new TypeError('Усі елементи масиву мають бути екземплярами Book');
        }
        return books.reduce((oldest, book) => (book.year < oldest.year ? book : oldest));
    }
}
/*
// інстанс класу або обєект
const kobzar = new Book(); 
// виклик методу класа 
kobzar.printInfo();
*/
module.exports = Book;