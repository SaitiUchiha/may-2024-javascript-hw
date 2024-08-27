// #AiN5CoUQ
// Створити функцію, яка робить глибоку копію об'єкту.
// Додаки перевірки на undefined, null, NaN.
//     Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.

function deepCopy(objct) {
    if (objct) {
        console.log(objct);
        let functions = [];
        for (const f in objct) {
            if (typeof objct[f] === 'function') {
                const fCopy = objct[f].bind({});
                functions.push({fCopy, f})
            }
        }
        const objCopyStr = JSON.stringify(objct);
        const objCopy = JSON.parse(objCopyStr);
        for (const element of functions) {
            objCopy[element.f] = element.fCopy;
        }
        return objCopy
    }
    console.log('Error')

}
let objDeepCopy = deepCopy({name:'Law', surname:'Trafalgar', captain(){console.log('Heart Pirates Captain')}});
console.log(objDeepCopy)
objDeepCopy.captain()


// #iz6emEsP2BA
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration
//     Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let courses = coursesAndDurationArray.map((courses,index)=> ({...courses, id:index+1}));
console.log(courses);