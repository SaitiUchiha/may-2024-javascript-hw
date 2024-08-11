let WorstGenerationArray =[
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
];
for (let Pirates = 0; Pirates < WorstGenerationArray.length; Pirates++) {
    document.write(`<div>
                        <h2>${WorstGenerationArray[Pirates].name} Посада - ${WorstGenerationArray[Pirates].position}, вік - ${WorstGenerationArray[Pirates].age}</h2>
                    </div>`);
    // console.log(WorstGenerationArray[Pirates]);
}