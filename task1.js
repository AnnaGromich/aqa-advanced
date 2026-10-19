/*
Створіть функцію яка приймає два параметри: width і height.
Усередині функції обчисліть площу прямокутника, перемноживши width на height та поверніть результат з функції.
Викличте вашу функцію з аргументами (наприклад 5 і 10 і виведіть результат (площу прямокутника) в консоль.
Реалізуйте функцію трьома способами (function declaration, function expression, arrow function)
*/

function areaRectangular1(height, width) {
    let res = height * width;
    return res;
};

const areaRectangular2 = (height, width) => height * width;

const areaRectangular3 = function (height, width) {
    let res = height * width;
    return res;
};

console.log('areaRectangular1: ' + areaRectangular1(6,8));
console.log('areaRectangular2: ' + areaRectangular1(67,89));
console.log('areaRectangular3: ' + areaRectangular1(623,891));