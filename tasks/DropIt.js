/*
Task
Intermediate Algorithm Scripting: Drop it
Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.
Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
*/


/* ---------- Imperative method ---------- */

function dropElements(arr, func) {
    const arrLength = arr.length;
    let i;

    for (i = 0; i < arrLength; i += 1) {
        if (func(arr[i])) {
            return arr.slice(i);
        }
    }
    return [];
}

console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;})); /* should return [3, 4] */
console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;})); /* should return [1, 0, 1] */
console.log(dropElements([1, 2, 3], function(n) {return n > 0;})); /* should return [1, 2, 3] */
console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;})); /* should return [] */
console.log(dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;})); /* should return [7, 4] */
console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;})); /* should return [3, 9, 2] */

/* ---------- Declarative method ---------- */

// function dropElements(arr, func) {
//     let index = arr.findIndex(func);
//     return arr.slice(index >= 0 ? index : arr.length);
// }