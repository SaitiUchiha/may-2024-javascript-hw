// Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.
let a = prompt("Перше число");
let b= prompt("Друге число");
if (a < b) {
    console.log(b);
} else if (a > b) {
    console.log(a);
} else if (a === b) {
    console.log('Числа рівні');
}  else {
    console.log('Error')
}