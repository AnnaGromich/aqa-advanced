// Створіть масив об'єктів users де обєкти мають довільні властивості (наприклад, name, email, age, тощо).
// Використовуючи цикл for...of, переберіть всі елементи масиву та виведіть їхні значення в консоль.
// Зробіть деструктуризацію в циклі

const users = [
    {
        name: "Олена",
        age: 25,
        email: "olena@gmail.com",
    },
    {
        name: "Андрій",
        age: 32,
        email: "andriy@ukr.net",
    },
    {
        name: "Марія",
        age: 19,
        email: "maria@gmail.com",
    },
];

// for (const user of users) {
//     console.log(user);
//     let { name, age, email } = user;
//     console.log(name, age, email);
// }

for (const user of users) {
    console.log(user);
    let { name, age, email } = user;
    console.log(name, age, email);
}