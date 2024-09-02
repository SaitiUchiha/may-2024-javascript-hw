// #sH8c4er
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

let target = document.getElementById('text');
target.onclick = function (ev) {
    this.style.display = 'none';
};

//
// #j693ca8
// створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача


let inputAge = +document.getElementById('age');
let ageCheker = document.getElementById('ageCheker');
ageCheker.onclick = function (ev) {
    ev.preventDefault();
    if (inputAge >= 18) {
        document.write('Age Above 18')
    } else {
        document.write('Age Below 18')
    }
}

// #ymAmN2xJ
// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

const objFill = document.forms.objFill;
const objFillBttn = document.getElementById('objFillBttn');
objFillBttn.onclick = function (ev) {
    ev.preventDefault();
    const nameFill = objFill.name.value;
    const surnameFill = objFill.surname.value;
    const ageFill = objFill.ageFill.value;
    let obj = {nameFill, surnameFill, ageFill};
    let div = document.createElement('div');
    let h1 = document.createElement('h1');
    h1.innerText = obj.nameFill + ' ' + obj.surnameFill + ' ' + obj.ageFill;
    div.append(h1);
    document.body.appendChild(div);
}


// #2VaLt4vDczH
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
let numberPlus = +localStorage.getItem('number') || 0;
numberPlus += 1;
localStorage.setItem('number', String(numberPlus));

let h1 = document.getElementById('numberPlus');
h1.innerText = numberPlus;

// В мене при перезагрузці чомусь рахує тільки один раз, а далі ні. Можете підказати чого не хватає?


// #LhSfdhM3
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessionsList зберігається
// інформація про дату та час відвідування сторінки. Є сторінка sessionsListPage.html (назва довільна), при відвідуванні
// якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а малювати в DOM


let sessionsList;
// let sessionsList = JSON.parse(localStorage.getItem('sessionsList')) || []; Лишаю активною довшу версію оскільки на даний момент мені легше сприйняти саме її.
if (localStorage.getItem('sessionsList')) {
    sessionsList = JSON.parse(localStorage.getItem('sessionsList'));
} else {
    sessionsList = [];
}
sessionsList.push(new Date());
localStorage.setItem('sessionsList', JSON.stringify(sessionsList))


//
//
// #Jg0gPO00
// створити конвертор ваги з кг в фунти. данні заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок

let kgValue = document.getElementById('kg');
let result = document.getElementById('result');
kgValue.oninput = function () {
    let kilograms = +this.value;
    result.innerText = kilograms / 0.45359237;
}


// #RbQGnH5DuC
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об'єкт
// сигнатура функції -
// addToLocalStorage(arrayName:string,objToAdd:any{}):void

function addToLocalStorage(arrayName, objToAdd) {
    let item = localStorage.getItem(arrayName)
    if (!item) {
        console.log('Error!')
    }
    let array = JSON.parse(item);
    if (typeof objToAdd === 'object') {
        array.push(objToAdd);
    }
    localStorage.setItem(arrayName, JSON.stringify(array))
}

// addToLocalStorage('sessionsList', {})


//
// #kUSgFqWY
// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

let table = document.getElementById('table');
let tableCreator = document.forms ['createTable'];
tableCreator.onsubmit = function (ev) {
    ev.preventDefault();
    let rowQuantity = +tableCreator.rows.value;
    let cellQuantity = +tableCreator.cells.value;
    let content = tableCreator.content.value;
    console.log(rowQuantity, cellQuantity, content);
    for (let i = 0; i < rowQuantity; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < cellQuantity; j++) {
            let td = document.createElement('td');
            td.innerText = content;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}


// #bq1zkx7WP
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого
// є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
// зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
// При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається

let blockValue = +localStorage.getItem('text100grn') || ({value:100, timestamp:new Date().getTime()});
let blockTimeValue = blockValue.timestamp;
console.log(blockTimeValue)
let currentTime = new Date().getTime();
console.log(currentTime)
if (currentTime - blockTimeValue > 10000){
    blockValueVal = blockValue.value;
    blockValueVal += 10;
    localStorage.setItem('text100grn', String({ value: blockValueVal, timestamp:new Date().getTime()}));
}

let h1v100= document.getElementById('100grn');
h1v100.innerText = blockValue.value+'grn';

можете пыдказати як правильно з timestamp розыбратися а то в мене blockTimeValue і currentTime получаються однаковими??


// #NKB0tgWIK1G
// ***PAGINATION
// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться наступні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів