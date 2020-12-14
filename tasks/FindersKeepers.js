/*
Task
Algorithm Scripting: Finders Keepers
*/

/* ---------- Imperative method ---------- */

function findElement(arr, func) {
  var i = 0;
  for (i; i < arr.length; i += 1) {
    if (func(arr[i])) {
      return arr[i];
    }
  }
  return undefined;
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0)); /* should return 2 */
console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })); /* should return 8 */
console.log(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })); /* should return undefined */

/* ---------- Declarative method ---------- */

// function findElement(arr, func) {
//   return arr.find(function(item) {
//     return func(item) === true ? item : undefined;
//   });
// }

// console.log(findElement([1, 2, 3, 4], num => num % 2 === 0)); /* should return 2 */
// console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })); /* should return 8 */
// console.log(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })); /* should return undefined */