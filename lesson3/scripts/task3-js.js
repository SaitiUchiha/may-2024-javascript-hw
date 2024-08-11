let GrandLineArray1 =[
    {name: 'Monkey D. Luffy', position: 'Captain', age: 19},
    {name: 'Roronoa Zoro', position: 'Swordsman and Combatant', age: 21},
    {name: 'Trafalgar D. Water Law', position: 'Captain and Doctor', age: 26},
    {name: 'Eustass Kid', position: 'Captain', age: 23},
    {name: 'Killer', position: 'Combatant', age: 27},
    {name: 'Jewelry Bonney', position: 'Captain', age: 12},
    {name: 'Scratchmen Apoo', position: 'Captain and Musician', age: 31},
    {name: 'Capone Bege', position: 'Captain', age: 42},
    {name: 'Basil Hawkins', position: 'Captain', age: 31},
    {name: 'X Drake', position: 'Captain', age: 33},
    {name: 'Urouge', position: 'Captain', age: 	47},
    {name: 'Marshall D. Teach', position: 'Admiral', age: 40},
    {name: 'Shanks', position: 'Chief', age: 39},
    {name: 'Buggy', position: 'Guild\'s Public Leader', age: 39},
    {name: 'Dracule Mihawk', position: 'Chief Officer', age: 43},
    {name: 'Crocodile', position: 'Chief Officer', age: 46},
    {name: 'Edward Newgate', position: 'Captain', age: 72},
    {name: 'Marco', position: ' 1st Division Commander', age: 45},
    {name: 'Charlotte Linlin', position: 'Captain', age: 68},
    {name: 'Kaidou', position: 'Captain', age: 59},
];

let i = 0;
while (i < GrandLineArray1.length) {
    document.write(`<h2>${GrandLineArray1[i].name} Посада - ${GrandLineArray1[i].position}, вік - ${GrandLineArray1[i].age}</h2>`);
    i++;
}