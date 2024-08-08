let day=prompt("Число від 0 до 31");
if (day <= 10) {
    console.log('Перша декада години');
} else if (day >= 11 && day <= 20) {
    console.log('Друга декада години');
} else if (day >= 21) {
    console.log('Третя декада години');
}  else {
    console.log('Error')
}