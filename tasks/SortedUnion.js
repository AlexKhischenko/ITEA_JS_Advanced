/*
Task
Intermediate Algorithm Scripting: Sorted Union
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
*/

/* ---------- Imperative method ---------- */

function uniteUnique() {
  const arrLength = arguments.length,
        newArr = [];
  let i,
      j;
  for (i = 0; i < arrLength; i += 1) {
    for (j = 0; j < arguments[i].length; j += 1) {
      if (!newArr.includes(arguments[i][j])) {
        newArr.push(arguments[i][j]);
      }
    }
  }
  return newArr;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])); /* should return [1, 3, 2, 5, 4] */
console.log(uniteUnique([1, 2, 3], [5, 2, 1])); /* should return [1, 2, 3, 5] */
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])); /* should return [1, 2, 3, 5, 4, 6, 7, 8] */


/* ---------- Declarative method ---------- */

// function uniteUnique() {
//   return Array.from(new Set([].concat(...arguments)));
// }