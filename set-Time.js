// * setTimeout((function), (s));
// it's executed at the end even ih hase less time;
// executed only once

// * setInterval((function), (s));
// every after sometime, it will call the function [ektu por por]

// ! 1000 = 1s

console.log(111);
console.log(222);
console.log(333);
setTimeout(() => {
    console.log("Setting time!");
}, 3000);
console.log(444);
console.log(555);
console.log(666);


// 
console.log(111);
console.log(222);
console.log(333);
setInterval(() => {
    console.log("Intervelling time!");
}, 1000);
console.log(444);
console.log(555);
console.log(666);