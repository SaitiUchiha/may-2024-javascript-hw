// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function S (a, b) {
//     if (a > 0 && b > 0) {
//         return a * b;
//     }
//     return console.log('Error');
// }


const S = (a, b) => (a > 0 && b > 0) ? a * b : 'Error'
console.log(S(10, 20));


// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function ScolaNum (Rnum) {
//     if (Rnum > 0) {
//         return 3.14*(Rnum*Rnum);
//     }
//     return console.log('Error');
// }

// let result = ScolaNum (5);

const ScolaNum = (Rnum) => (Rnum > 0) ? 3.14 * (Rnum * Rnum) : 'Error'
console.log(ScolaNum(5));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r S=2πR2 + 2πRH
// function ScylNum (Rnum, Hnum) {
//     if (Rnum > 0) {
//         return 2*3.14*(Rnum*Rnum)+2*3.14*Rnum*Hnum;
//     }
//     return console.log('Error');
// }
//
// let result = ScylNum (5,10);
// console.log(result);

const ScylNum = (Rnum, Hnum) => (Rnum > 0) ? 2 * 3.14 * (Rnum * Rnum) + 2 * 3.14 * Rnum * Hnum : 'Error'
console.log(ScylNum(5, 10))

// - створити функцію яка приймає масив та виводить кожен його елемент
// function massiv (mass) {
//     for (let i = 0; i < mass.length; i++) {
//         console.log(mass[i]);
//     }
// }
// massiv([1, 2, 3]);

const massiv = (mass) => {
    for (let i = 0; i < mass.length; i++) {
        console.log(mass[i]);
    }
}
massiv([1, 2, 3]);

// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
// function printToDocument(txt) {
//     document.write(`<p>${txt}</p>`);
// }
//

const printToDocument = (txt) => document.write(`<p>${txt}</p>`);

printToDocument('Trafalgar');
printToDocument('D.');
printToDocument('Water');
printToDocument('Law');

// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий

// function createLi(txt) {
//     document.write(`<ul>`)
//     for (let i = 0; i < 3; i++) {
//         document.write(`<li>${txt}</li>`);
//     }
//     document.write(`</ul>`)
// }
// createLi('Trafalgar');

const createLi = (txt) => {
    document.write(`<ul>`)
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${txt}</li>`);
    }
    document.write(`</ul>`)
}
createLi('Trafalgar');

// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write

// function createLi(txt, num) {
//     document.write(`<ul>`);
//     for (let i = 0; i < num; i++) {
//         document.write(`<li>${txt}</li>`);
//     }
//     document.write(`</ul>`);
// }
//
// createLi('Shi no Gekai',5);


const createLi2 = (txt, num) => {
    document.write(`<ul>`);
    for (let i = 0; i < num; i++) {
        document.write(`<li>${txt}</li>`);
    }
    document.write(`</ul>`);
}
createLi2('Shi no Gekai', 5);

// // - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li)
// // та виводить його через document.write
// function createLiprimit(primitives) {
//     document.write(`<ul>`);
//     for (const primitive of primitives) {
//         document.write(`<li>${primitive}</li>`);
//     }
//     document.write(`</ul>`);
// }
//
// createLiprimit(['Shi no Gekai', 26, true]);

const createLiprimit = (primitives) => {
    document.write(`<ul>`);
    for (const primitive of primitives) {
        document.write(`<li>${primitive}</li>`);
    }
    document.write(`</ul>`);
}

createLiprimit(['Shi no Gekai', 26, true]);

// // - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// function createobj(field) {
//     document.write(`<div>`);
//     for (const fieldElement of field) {
//         document.write(`<p>${fieldElement.id}</p>`);
//         document.write(`<p>${fieldElement.age}</p>`);
//         document.write(`<p>${fieldElement.name}</p>`);
//         // document.write(`<p>${fieldElement.name} ${fieldElement.id} ${fieldElement.age}</p>`);
//     }
//     document.write(`</div>`);
// }
// createobj([{id:'Shi no Gekai', age: 26, name: 'Trafalgar Law'}]);

const createobj = (field) => {
    document.write(`<div>`);
    for (const fieldElement of field) {
        document.write(`<p>${fieldElement.id}</p>`);
        document.write(`<p>${fieldElement.age}</p>`);
        document.write(`<p>${fieldElement.name}</p>`);
        // document.write(`<p>${fieldElement.name} ${fieldElement.id} ${fieldElement.age}</p>`);
    }
    document.write(`</div>`);
}
createobj([{id: 'Shi no Gekai', age: 26, name: 'Trafalgar Law'}]);


// - створити функцію яка повертає найменьше число з масиву
// function minNumber(arrayNum) {
//     minNum = arrayNum[0]
//     for (let i = 1; i < arrayNum.length; i++) {
//         let num = arrayNum[i];
//         if (num < minNum) {
//             minNum = num
//         } else {
//             console.log('error')
//         }
//     }
//     return minNum
// }
// console.log(minNumber([1, 6, 7, -20]));

const minNumber = (arrayNum) => {
    minNum = arrayNum[0]
    for (let i = 1; i < arrayNum.length; i++) {
        let num = arrayNum[i];
        if (num < minNum) {
            minNum = num
        }
    }
    return minNum
}
console.log(minNumber([1, 6, 7, -20]));


// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// function sum(arr) {
//     Sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         Sum += arr[i];
//     }
//     return Sum
// }
// console.log(sum([1,2,10]));

const sum = (arr) => {
    Sum = 0;
    for (let i = 0; i < arr.length; i++) {
        Sum += arr[i];
    }
    return Sum
}
console.log(sum([1, 2, 10]));


// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// function swap(arr, index1, index2) {
//
//     let a = arr[index1];
//     arr[index1] = arr[index2];
//     arr[index2] = a;
//
//     return arr;
// }
//
// console.log(swap([11, 22, 33, 44], 0, 1));

const swap = (arr, index1, index2) => {
    let a = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = a;
    return arr;
}

console.log(swap([11, 22, 33, 44], 0, 1));


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400

// function exchange(sumUAH,currencyValues,exchangeCurrency) {
//     let YouWant = exchangeCurrency;
//     for (const type of currencyValues) {
//         if ( type.currency === YouWant){
//             YouWant = sumUAH/type.value;
//         }
//     }
//     return YouWant;
// }
// console.log(exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD'));

const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    let YouWant = exchangeCurrency;
    for (const type of currencyValues) {
        if (type.currency === YouWant) {
            YouWant = sumUAH / type.value;
        }
    }
    return YouWant;
}
console.log(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'USD'));