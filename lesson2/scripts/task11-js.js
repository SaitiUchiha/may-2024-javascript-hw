// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні,
//     тобто ті, які приводиться до false, а це 0 null undefined і тд).
let el = prompt('falsy-значення')
if (el == null || el === '' || el == 0 || el == undefined || el == -0 || el == 0n || el == NaN || el== false) {
    console.log('default')
} else {
    console.log('el')
}



