// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r S=2πR2 + 2πRH
function ScylNum (Rnum, Hnum) {
    if (Rnum > 0) {
        return 2*3.14*(Rnum*Rnum)+2*3.14*Rnum*Hnum;
    }
    return console.log('Error');
}

let result = ScylNum (5,10);
console.log(result);