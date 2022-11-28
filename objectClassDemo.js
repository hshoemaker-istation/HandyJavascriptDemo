let looseObject = {
    favoriteGame: 'Elder Scrolls IV: Oblivion',
    test: {hello: 'world', testing: '123', onemore: { for: 'Michael'}}
};

console.group('Setting Objects');
console.log(looseObject.favoriteMovie);

looseObject['favoriteMovie'] = 'The Departed';

console.log(looseObject);
console.log(looseObject.favoriteMovie);
console.groupEnd();

console.group('Copying Objects');
let looseObjectCopy = {
    favoriteColor: 'Blue',
    favoriteBandInHighSchool: 'System of a Down',
    favoriteGame: 'Rocket League'
};
Object.assign(looseObjectCopy, looseObject);

console.log(looseObjectCopy);
console.groupEnd();

console.group('Keys and Values');
console.log(Object.keys(looseObjectCopy));
console.log(Object.values(looseObjectCopy));
console.groupEnd();


looseObject.favoriteGame = 'Mass Effect';
console.log(looseObject);
console.log(looseObjectCopy);

// console.group('Deleting an Object Property');
// delete looseObjectCopy.favoriteColor;
// console.log(looseObjectCopy);
// console.groupEnd();