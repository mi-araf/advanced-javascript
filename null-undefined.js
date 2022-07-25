/* undefined is a variable that refers to something that-
doesn't exist, and the variable isn't defined to be-
anything. null is a variable that is defined but is missing-
a value. */


// * ways to get undefined
let pakhi;
console.log(pakhi);  // undefined


function add (num1, num2) {
    console.log(num1 + num2);
    // return here to escape undefined
}
const resAdd = add(13, 89); // 102
console.log(resAdd);
// undefined (since nothing is returned in fun() body)


function num (num1, num2) {
    console.log(num2);
}
const resNum = num(19); // undefined


function X (num1, num2) {
    console.log(num1, num2);
}
const x = X(19); // 19 undefined


const premik = {nam: "smamas", phn: 902091};
console.log(premik.address);    // undefined


const fun = undefined;
console.log("It's fun 🤣", fun); // It's fun � undefined


const nullFun = null;
console.log(nullFun);   // null


const ages = [2, 3, 1, 6];
console.log(ages[69]);  // undefined
// since the index 69 is not present in the array