/* 
map() creates a new array from calling a function for every array element.
map() calls a function once for each element in an array.
map() does not execute the function for empty elements.
map() does not change the original array. 
*/
// syntax:-  array.map(function(currentValue, index, array));
// index, array are optional


// 1. tradational way
const num = [2, 3, 4, 5, 6, 7];
const output = [];
for (let i = 0; i < num.length; i++) {
    let element = num[i];
    const resultSQ = element * element;
    output.push(resultSQ);
    console.log(`Square of ${element} =`, resultSQ);
}
console.log("Squares in an array:", output);


// 2. Map  => returns array
const numbers = [2, 3, 4, 5, 6, 7];

const square = numbers.map(function (element) {
    return element * element;
})
console.log(square);

const arrowSquare = numbers.map(x => x * x);
console.log("Get Square using arrow function:", arrowSquare);

numbers.map(function (element) {
    console.log(element);
})  // to see all the numbers seperately, like for loop

numbers.map(function (element, index) {
    console.log(element, "is of index", index);
})  // to see all the numbers & index seperately, like for loop

numbers.map(function (element, index, array) {
    console.log(element, index, array);
})



// 3. Filter  => returns array
const shonkha = [2, 3, 4, 5, 6, 7];
const big5 = shonkha.filter(x => x > 5);
console.log(big5);

// 4. Find  => returns an element
const isSix = shonkha.find(x => x > 6);
console.log(isSix);