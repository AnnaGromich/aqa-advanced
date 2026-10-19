/* 
In this Kata we are passing a number (n) into a function.
Your code will determine if the number passed is even (or not).
The function needs to return either a true or false.
Numbers may be positive or negative, integers or floats.
Floats with decimal part non equal to zero are considered UNeven for this kata.
*/

const isEven = number => Math.abs(number) % 2 === 0;

console.log('Is this number Even - ' + isEven(-10));
console.log('Is this number Even - ' + isEven(0));
console.log('Is this number Even - ' + isEven(5));
console.log('Is this number Even - ' + isEven(999));