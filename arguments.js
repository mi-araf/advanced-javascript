// arguments => array like object

// 1. all items with forEach loop
function addForEach(num1, num2) {
    let x = [...arguments];
    let total = 0;
    Array.from(x).forEach(function(item) {
        total += item;
    });
// or, Array.from(x).forEach( item => total += item );
    return total;
}
const result = addForEach(2, 3, 5, 10);
console.log("Result of forEach is:", result);  // 20

// 2. all items with for loop
function addFor(num1) {
    let x = [...arguments], total = 0;
    for (let i = 0; i < x.length; i++) {
        const item = x[i];
        total += item;
    }
    return total;
}
console.log("Result of For loop:", addFor(3, 9, 2));  // 14


// 3. see args
function seeArgs(a, b) {
    console.log(arguments);
    console.log(...arguments);
    console.log([...arguments]);
    console.log(arguments.length);
    console.log(arguments.callee);
}
console.log(seeArgs(2, 1, 4, 5, 3));


// hoisting: jekono kisu ekta declare krso & oitar-
// scope ke upor er level eniye jawya.