// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий

function createLi(txt) {
    document.write(`<ul>`)
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${txt}</li>`);
    }
    document.write(`</ul>`)
}
createLi('Trafalgar');
