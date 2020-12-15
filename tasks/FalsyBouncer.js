/*
Task
Algorithm Scripting: Falsy Bouncer
Remove all falsy values from an array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
*/

/* ---------- Imperative method ---------- */

function bouncer(arr) {
  var newArr = [],
      arrSize = arr.length,
      i = 0;
  for (i; i < arrSize; i += 1) {
    if (arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(bouncer([7, "ate", "", false, 9])); /* should return [7, "ate", 9] */
console.log(bouncer(["a", "b", "c"])); /* should return ["a", "b", "c"] */
console.log(bouncer([false, null, 0, NaN, undefined, ""])); /* should return [] */
console.log(bouncer([null, NaN, 1, 2, undefined])); /* should return [1, 2] */


/* ---------- Declarative method ---------- */

// function bouncer(arr) {
//   return arr.filter(function(item) {
//     if (item) {
//       return item;
//     }
//   });
// }

// console.log(bouncer([7, "ate", "", false, 9])); /* should return [7, "ate", 9] */
// console.log(bouncer(["a", "b", "c"])); /* should return ["a", "b", "c"] */
// console.log(bouncer([false, null, 0, NaN, undefined, ""])); /* should return [] */
// console.log(bouncer([null, NaN, 1, 2, undefined])); /* should return [1, 2] */