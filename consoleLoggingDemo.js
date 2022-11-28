console.time();

for(let x = 0; x < 5; x++) {
    console.count('for loop count');
}

let neighbors = [
    {name: 'Todd', age: 31},
    {name: 'Margo', age: 28},
    {name: 'Clark', age: 41},
    {name: 'Ellen', age: 39},
];

console.warn('Jenkies! This clue looks potentially dangerous!');
console.error('Zoinks! There is an error here!');
console.table(neighbors);


console.timeEnd();