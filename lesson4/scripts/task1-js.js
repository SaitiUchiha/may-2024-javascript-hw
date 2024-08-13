// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function S (a, b) {
    if (a > 0 && b > 0) {
        return a * b;
    }
    return console.log('Error');
}

let result = S (5, 25);
console.log(result);