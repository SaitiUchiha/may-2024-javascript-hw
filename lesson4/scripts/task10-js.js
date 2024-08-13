// - створити функцію яка повертає найменьше число з масиву
function minNumber(arrayNum) {
    minNum = arrayNum[0];
    // for (const arrayNumElement of arrayNum) {
    //     if (arrayNumElement < minNum) {
    //         minNum = arrayNumElement;
    //     }
    //
    // }
    for (let i = 1; i < arrayNum.length; i++) {
        let num = arrayNum[i];
        if (num < minNum) {
            minNum = num
        } else {
            console.log('error')
        }
    }
    return minNum
}
console.log(minNumber([1, 6, 7, -20]));
