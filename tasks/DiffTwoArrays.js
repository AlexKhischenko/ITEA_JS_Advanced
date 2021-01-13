/*
Task
Intermediate Algorithm Scripting: Diff Two Arrays
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
Note
You can return the array with its elements in any order.
*/

/* ---------- Imperative method ---------- */

// Variant #1
function diffArray(arr1, arr2) {
  var newArr = [],
      arraySize = arr1.length,
      i = 0;

  // Check if the second array contains elements of the first. Adding unique elements to a new array
  for (i; i < arraySize; i += 1) {
    if (arr2.includes(arr1[i])) {
      continue;
    } else {
      newArr.push(arr1[i]);
    }
  }

  arraySize = arr2.length;
  i = 0;

  // Check if the first array contains elements of the second. Adding unique elements to a new array
  for (i; i < arraySize; i += 1) {
    if (arr1.includes(arr2[i])) {
      continue;
    } else {
      newArr.push(arr2[i]);
    }
  }

  return newArr;
}


console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])); /* should return ["pink wool"] */
console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])); /* should return ["diorite", "pink wool"] */
console.log(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"])); /* should return [] */
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])); /* should return [4] */
console.log(diffArray([], ["snuffleupagus", "cookie monster", "elmo"])); /* should return ["snuffleupagus", "cookie monster", "elmo"] */
console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"])); /* should return [1, "calf", 3, "piglet", 7, "filly"] */


/* ---------- Declarative method ---------- */

// function diffArray(arr1, arr2) {
//   return arr1.concat(arr2).filter(function(item) {
//     if (!arr1.includes(item) || !arr2.includes(item)) {
//       return item
//     }
//   })
// }
