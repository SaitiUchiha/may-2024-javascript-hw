// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function createobj(field) {
    document.write(`<div>`);
    for (const fieldElement of field) {
        document.write(`<p>${fieldElement.id}</p>`);
        document.write(`<p>${fieldElement.age}</p>`);
        document.write(`<p>${fieldElement.name}</p>`);
        // document.write(`<p>${fieldElement.name} ${fieldElement.id} ${fieldElement.age}</p>`);
    }
    document.write(`</div>`);
}
createobj([{id:'Shi no Gekai', age: 26, name: 'Trafalgar Law'}]);