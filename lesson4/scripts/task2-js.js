// - створити функцію яка обчислює та повертає площу кола з радіусом r
function ScolaNum (Rnum) {
    if (Rnum > 0) {
        return 3.14*(Rnum*Rnum);
    }
    return console.log('Error');
}

let result = ScolaNum (5);
console.log(result);