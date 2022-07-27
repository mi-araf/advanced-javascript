/* A closure is a function having access to the parent scope-
even after the parent function has closed. */

/* A closure is the combination of a function bundled together-
(enclosed) with references to its surrounding state (the private environment). */

function stopWatch() {
    let count = 0;
    return function() {
        count++;
        return count;
    }
}

const clock1 = stopWatch();
console.log(clock1);   // [Function (anonymous)]
console.log(clock1());  // 1
console.log(clock1());  // 2
console.log(clock1());  // 3
console.log(clock1());  // 4

const clock2 = stopWatch();
console.log(clock2());  // 1
console.log(clock2());  // 2
console.log(clock2());  // 3

console.log(clock1());  // 5

console.log(stopWatch); // [Function: stopWatch]
console.log(stopWatch()); // [Function (anonymous)]

console.log(clock2());  // 4
console.log(clock1());  // 6