// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400

function exchange(sumUAH,currencyValues,exchangeCurrency) {
   let YouWant = exchangeCurrency;
    for (const type of currencyValues) {
        if ( type.currency == 'USD'){
            YouWant = sumUAH/type.value;
        }
    }
    return YouWant;
}
console.log(exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD'));