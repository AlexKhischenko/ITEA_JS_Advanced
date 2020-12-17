/*
Task
Algorithm Scripting: Chunky Monkey
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
*/

/* ---------- Imperative method ---------- */

function chunkArrayInGroups(arr, size) {
  return arr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2)); /* should return [["a", "b"], ["c", "d"]] */
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)); /* should return [[0, 1, 2], [3, 4, 5]] */
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)); /* should return [[0, 1], [2, 3], [4, 5]] */
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)); /* should return [[0, 1, 2, 3], [4, 5]] */
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)); /* should return [[0, 1, 2], [3, 4, 5], [6]] */
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)); /* should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]] */
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)); /* should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]] */

/* ---------- Declarative method ---------- */