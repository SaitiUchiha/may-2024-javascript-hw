// #dFeorS3m7u
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'


let words1 = 'hello world';
let words2 = 'lorem ipsum';
let words3 = 'javascript is cool';

console.log(words1, words1.length);
console.log(words2, words2.length);
console.log(words3, words3.length);


// #8lld9HMxXWB
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'


let strings1 = 'hello world';
let strings2 = 'lorem ipsum';
let strings3 = 'javascript is cool';

console.log(strings1.toUpperCase());
console.log(strings2.toUpperCase());
console.log(strings3.toUpperCase());


// #ClDsAm7xba7
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'


let str1 = 'HELLO WORLD';
let str2 = 'LOREM IPSUM';
let str3 = 'JAVASCRIPT IS COOL';

console.log(str1.toLowerCase());
console.log(str2.toLowerCase());
console.log(str3.toLowerCase());


// #0b89BkYZwu
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.


let str = ' dirty string   ';
let split = str.split(' ');
const splitClean = (srtingSplit, index1, index2) => {
    let spl1 = srtingSplit[index1];
    let spl2 = srtingSplit[index2];
    let splitCl = [];
    splitCl.push(spl1);
    splitCl.push(spl2);
    return splitCl.join(' ');
}
console.log(splitClean(split, 1, 2));

// from Sergiy
const strClean = str.trim()
console.log(strClean);


//     #bfoJuse4ZzP
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']


function stringToarray(strn) {
    return strn.split(' ');
}

let strin = 'Ревуть воли як ясла повні';
console.log(stringToarray(strin))


// #Rbr5kEQ
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.


let numbArr = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let numToStr = numbArr.map(number => number.toString())
console.log(numToStr)


// #5hqyKTfmc
// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]


let sortNums = (arrayNums, direction) => {
    if (direction === 'ascending') {
        return arrayNums.sort((a, b) => a - b);

    }
    if (direction === 'descending') {
        return arrayNums.sort((a, b) => b - a);

    }
}
let nums = [11, 21, 3];
console.log(sortNums(nums, 'ascending'))
console.log(sortNums(nums, 'descending'))


// ==========================
// #yo06d74c1C
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}


let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let monthDurationSort = coursesAndDurationArray.sort((a, b) => a.monthDuration - b.monthDuration);
console.log(monthDurationSort)
let monthDurationlonger5 = coursesAndDurationArray.filter(duration => duration.monthDuration >= 5)
console.log(monthDurationlonger5)

let mapcoursesArray = coursesAndDurationArray.map((cArr, index) => {
    let obj = JSON.parse(JSON.stringify(cArr));
        obj.id = index + 1
        return obj;
});
console.log(mapcoursesArray)


// =========================
//     #bolvdlhP
// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }
//


let cardSuit = ['spade', 'diamond', 'heart', 'clubs'];
let cardValue = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'];
let cards = []
for (const Suit of cardSuit) {
    for (const Value of cardValue) {
        if (Suit === 'spade' || Suit === 'clubs') {
            cards.push({cardSuit: Suit, value: Value, color: 'black'});
        } else if (Suit === 'diamond' || Suit === 'heart') {
            cards.push({cardSuit: Suit, value: Value, color: 'red'});
        }
    }
}
console.log(cards)


// =========================
//
//     #EP5I1UUzAX
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }


let reduce = cards.reduce((suitsSort, card) => {
    switch (card.cardSuit) {
        case 'spade':
            suitsSort.spades.push(card);
            break
        case 'clubs':
            suitsSort.clubs.push(card)
            break
        case 'diamond':
            suitsSort.diamonds.push(card)
            break
        case 'heart':
            suitsSort.hearts.push(card)
    }
    return suitsSort
}, {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: []
});
console.log(reduce)


// =========================
// #4LJn7zBx
// взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker


let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
let sass =coursesArray.filter(module => {
    return module.modules.includes('sass');
});
console.log(sass)
let docker =coursesArray.filter(module => {
    return module.modules.includes('docker');
});
console.log(docker)