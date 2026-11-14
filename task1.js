const Book = require('./Book');
const EBook = require('./EBook');

// 1. Екземпляри Book
console.log('--- 1. Book ---');
const kobzar = new Book('Кобзар', 'Тарас Шевченко', 1840);
const lisovaPisnia = new Book('Лісова пісня', 'Леся Українка', 1911);
const tygrolovy = new Book('Тигролови', 'Іван Багряний', 1944);

kobzar.printInfo();
lisovaPisnia.printInfo();
tygrolovy.printInfo();

// 2. Екземпляр EBook
console.log('\n--- 2. EBook ---');
const eneida = new EBook('Енеїда', 'Іван Котляревський', 1798, 'epub');
eneida.printInfo();

// 3. Геттери та сеттери
console.log('\n--- 3. Геттери та сеттери ---');
console.log('Назва до зміни:', tygrolovy.title);
tygrolovy.title = 'Тигролови (перевидання)';
tygrolovy.year = 1991;
console.log('Після зміни:', tygrolovy.title, tygrolovy.year);

eneida.fileFormat = 'pdf';
console.log('Новий формат Енеїди:', eneida.fileFormat);

// Перевірка валідації
const invalidUpdates = [
  () => { kobzar.title = ''; },
  () => { kobzar.author = 42; },
  () => { kobzar.year = 3000; },
  () => { eneida.fileFormat = 'docx'; },
];

invalidUpdates.forEach((update) => {
  try {
    update();
  } catch (error) {
    console.log(`Помилка валідації: ${error.message}`);
  }
});

// 4. Найдавніша книга (масив із Book та EBook)
console.log('\n--- 4. Найдавніша книга ---');
const library = [kobzar, lisovaPisnia, tygrolovy, eneida];
const oldest = Book.findOldest(library);
oldest.printInfo();

// 5. Створення EBook з Book
console.log('\n--- 5. EBook.fromBook ---');
const eKobzar = EBook.fromBook(kobzar, 'fb2');
eKobzar.printInfo();
console.log('eKobzar instanceof EBook:', eKobzar instanceof EBook);
console.log('eKobzar instanceof Book:', eKobzar instanceof Book);