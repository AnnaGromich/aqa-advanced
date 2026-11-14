const Book = require('./Book');

const ALLOWED_FORMATS = ['PDF', 'EPUB', 'MOBI', 'FB2', 'AZW3', 'TXT'];

class EBook extends Book {
  #fileFormat;

  constructor(title, author, year, fileFormat) {
    super(title, author, year);
    this.fileFormat = fileFormat;
  }

  get fileFormat() {
    return this.#fileFormat;
  }

  set fileFormat(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Формат файлу має бути рядком');
    }
    const format = value.trim().toUpperCase();
    if (!ALLOWED_FORMATS.includes(format)) {
      throw new RangeError(`Непідтримуваний формат "${value}". Доступні: ${ALLOWED_FORMATS.join(', ')}`);
    }
    this.#fileFormat = format;
  }

  printInfo() {
    console.log(
      `Електронна книга: "${this.title}", автор: ${this.author}, рік видання: ${this.year}, формат файлу: ${this.fileFormat}`
    );
  }

  static fromBook(book, fileFormat) {
    if (!(book instanceof Book)) {
      throw new TypeError('Перший аргумент має бути екземпляром Book');
    }
    return new EBook(book.title, book.author, book.year, fileFormat);
  }
}

module.exports = EBook;