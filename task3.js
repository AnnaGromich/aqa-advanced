// Створіть функцію divide, яка приймає два параметри: numerator і denominator та повертає як результат виконання число отримане 
// від ділення.
// У функції треба поділити numerator на denominator і повернути результат.
// Додайте валідацію в функції. У разі,
// якщо denominator дорівнює 0
// або хоча б один з аргументів не є числом, викиньте помилку з інформативним повідомленням,
// Викличте функцію divide з різними значеннями numerator і denominator, включаючи випадок, коли denominator дорівнює 0 або один з 
// аргументів не є числом.
// Огорніть кожен окремий виклик функції divide в try…catch.Використовуючи блок finally, виведіть повідомлення "Робота завершена" 
// в консоль, навіть якщо помилка виникла або не виникла.

function divide(numerator, denominator) {
    if (
        typeof numerator !== "number" || Number.isNaN(numerator) ||
        typeof denominator !== "number" || Number.isNaN(denominator)
    ) {
        console.log(`Обидва аргументи мають бути числами. Отримано: ${typeof numerator}, ${typeof denominator}`);
    }

    if (denominator === 0) {
        console.log("Ділення на нуль неможливе: denominator не може дорівнювати 0");
    }

    return numerator / denominator;
}

// Коректні значення
try {
    console.log(divide(10, 2)); // 5
} catch (error) {
    console.error(error.message);
} finally {
    console.log("Робота завершена");
}

// Ділення на нуль
try {
    console.log(divide(10, 0));
} catch (error) {
    console.error(error.message); // Ділення на нуль неможливе: ...
} finally {
    console.log("Робота завершена");
}

// Один з аргументів не є числом
try {
    console.log(divide("10", 2));
} catch (error) {
    console.error(error.message); // Обидва аргументи мають бути числами. Отримано: string, number
} finally {
    console.log("Робота завершена");
}