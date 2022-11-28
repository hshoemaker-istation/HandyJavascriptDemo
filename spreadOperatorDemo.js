let demoArray = ['never', 'gonna', 'give', 'you', 'up'];
let demoObjectInit = {
    prop1: 'never',
    prop2: 'gonna',
    prop3: 'let',
    prop4: 'you'
};


let demoObject = { demoObjectInit, prop5: 'down' };
let demoObjectSpread = { ...demoObjectInit, prop5: 'down' };


console.group('Without spread operator');
console.log(demoArray);
console.log(demoObject);
console.groupEnd();

console.group('With spread operator');
console.log(...demoArray);
console.log(demoObjectSpread);
console.groupEnd();