// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li)
// та виводить його через document.write
function createLiprimit(primitives) {
    document.write(`<ul>`);
    for (const primitive of primitives) {
        document.write(`<li>${primitive}</li>`);
    }
    document.write(`</ul>`);
}

createLiprimit(['Shi no Gekai', 26, true]);
