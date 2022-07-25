// *  == checkes only the value
// *  === checkes the value + type

const one = 2;
const two = "2";
if (one == two) {
    console.log("Condition is 'True'");
} else {
    console.log("Condition is 'False'");
}   // Condition is 'True'

if (one === two) {
    console.log("Condition is 'True'");
} else {
    console.log("Condition is 'False'");
}   // Condition is 'False'

console.log("typeOf one is:-", (typeof one)); // number
console.log("typeOf two is:-", typeof two); // string

// false = 0; true = 1;
console.log("1 === true; returns", 1 === true); // false
console.log("2 === true; returns", 2 === true); // false
console.log("1 == true; returns", 1 == true); // true
console.log("1 == false; returns", 1 == false); // false
console.log("2 == true; returns", 2 == true); // false
console.log("0 == false; returns", 0 == false); // true
console.log("0 === false; returns", 0 === false); // false


// ! ==
/* double equals (==) will perform a type conversion when-
comparing two things, and will handle NaN, -0, and +0
specially to conform to IEEE 754 (so NaN != NaN, and -0
== +0); */
// examples:
const num1 = 0;
const big1 = 0n;
const str1 = '0';
const obj1 = new String('0');

console.log(num1 == str1); // true
console.log(big1 == num1); // true
console.log(str1 == big1); // true

console.log(num1 == obj1); // true
console.log(big1 == obj1); // true
console.log(str1 == obj1); // true


// ! ===
/* triple equals (===) will do the same comparison as
double equals (including the special handling for NaN,
-0, and +0) but without type conversion; if the types
differ, false is returned. */
// examples
const num = 0;
const obj = new String('0');
const str = '0';

console.log(num === num); // true
console.log(obj === obj); // true
console.log(str === str); // true

console.log(num === obj); // false
console.log(num === str); // false
console.log(obj === str); // false
console.log(null === undefined); // false
console.log(obj === null); // false
console.log(obj === undefined); // false
