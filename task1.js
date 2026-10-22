// Завдання 1

// Створіть функцію яка приймає два параметри: width і height.
// Усередині функції обчисліть площу прямокутника, перемноживши width на height та поверніть результат з функції.
// Викличте вашу функцію з аргументами (наприклад 5 і 10 і виведіть результат (площу прямокутника) в консоль.
// Реалізуйте функцію трьома способами (function declaration, function expression, arrow function)

function handleEven() {
    console.log("number is even");
}

function handleOdd() {
    console.log("number is odd");
}

// 1. Function declaration
function handleNumDeclaration(num, onEven, onOdd) {
    if (num % 2 === 0) {
        onEven();
    } else {
        onOdd();
    }
}

// 2. Function expression
const handleNumExpression = function (num, onEven, onOdd) {
    if (num % 2 === 0) {
        onEven();
    } else {
        onOdd();
    }
};

// 3. Arrow function
const handleNumArrow = (num, onEven, onOdd) => {
    num % 2 === 0 ? onEven() : onOdd();
};

handleNumDeclaration(80, handleEven, handleOdd); // number is even
handleNumExpression(3, handleEven, handleOdd);  // number is odd
handleNumArrow(612, handleEven, handleOdd);      // number is even