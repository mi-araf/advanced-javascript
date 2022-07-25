// start - truthy
/* In JavaScript, a truthy value is a value that is considered true
 when encountered in a Boolean context. All values are truthy unless
 they are defined as falsy.
 That is, all values are truthy except ->
 false, 0, -0, 0n, "", null, undefined, and NaN. */

// examples of truthy
// if (true)
// if ({})
// if ([])
// if (42)
// if ("0")
// if ("false")   // becomes string due to quote
// if (new Date())
// if (-42)
// if (12n)
// if (3.14)
// if (-3.14)
// if (Infinity)
// if (-Infinity)

/* 
If the first object is truthy, the logical AND operator returns-
the second operand:

true && "dog"
// returns "dog"

[] && "dog"
// returns "dog"
*/


// start - falsy
/* A falsy (sometimes written falsey) value is a value that is
considered false when encountered in a Boolean context. */

// * example
// if (false)
// if (null)
// if (undefined)
// if (0)
// if (-0)
// if (0n)
// if (NaN)
// if ("")

/*
If the first object is falsy, it returns that object:

false && "dog"
// ↪ false
0 && "dog"
// ↪ 0
*/


// ! examples:
const fillName = "ABd", nullName = "", whiteSpace = " ", numName = "0";
const num = 7, nullNum = 0;

if (fillName) {
    console.log("True");
} else {
    console.log('False');
}   // True

if (nullName) {
    console.log("True");
} else {
    console.log('False');
}   // False

if (whiteSpace) {
    console.log("True");
} else {
    console.log('False');
}   // True

if (numName) {
    console.log("True");
} else {
    console.log('False');
}   // True

if (num) {
    console.log("True");
} else {
    console.log('False');
}   // True

if (nullNum) {
    console.log("True");
} else {
    console.log('False');
}   // False


let myName = null; 
// let myName = undefined;
// let myName = NaN;
// console.log(myName);    // undefined
if (myName) {
    console.log("True");
} else {
    console.log('False');
}   // False