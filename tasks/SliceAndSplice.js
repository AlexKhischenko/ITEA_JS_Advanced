/*
Task
Algorithm Scripting: Slice and Splice
You are given two arrays and an index.
Copy each element of the first array into the second array, in order.
Begin inserting elements at index n of the second array.
Return the resulting array. The input arrays should remain the same after the function runs.
*/

/* ---------- Imperative method ---------- */

function frankenSplice(arr1, arr2, n) {
  var newArr = [],
      i = 0,
      j = 0,
      arrOneSize = arr1.length,
      arrTwoSize = arr2.length;

  for (i; i < arrTwoSize; i += 1) {
    if(i === n) {
      for(j; j < arrOneSize; j += 1) {
        newArr.push(arr1[j]);
      }
      newArr.push(arr2[i]);
    } else {
      newArr.push(arr2[i]);
    }
  }
  return newArr;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1)); /* should return [4, 1, 2, 3, 5, 6] */
console.log(frankenSplice([1, 2, 3], [4, 5], 1)); /* should return [4, 1, 2, 3, 5] */
console.log(frankenSplice([1, 2], ["a", "b"], 1)); /* should return ["a", 1, 2, "b"] */
console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)); /* should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"] */

/* ---------- Declarative method ---------- */

// // Option 1
// function frankenSplice(arr1, arr2, n) {
//   var newArr = arr2.slice();
//   arr1.forEach(function(item) {
//     newArr.splice(n, 0, item);
//     n += 1;
//   });
//   return newArr;
// }

// console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1)); /* should return [4, 1, 2, 3, 5, 6] */
// console.log(frankenSplice([1, 2, 3], [4, 5], 1)); /* should return [4, 1, 2, 3, 5] */
// console.log(frankenSplice([1, 2], ["a", "b"], 1)); /* should return ["a", 1, 2, "b"] */
// console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)); /* should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"] */

//// Option 2
// function frankenSplice(arr1, arr2, n) {
//   var newArr = arr2.slice();
//   newArr.splice(n, 0, ...arr1);
//   return newArr;
// }

// console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1)); /* should return [4, 1, 2, 3, 5, 6] */
// console.log(frankenSplice([1, 2, 3], [4, 5], 1)); /* should return [4, 1, 2, 3, 5] */
// console.log(frankenSplice([1, 2], ["a", "b"], 1)); /* should return ["a", 1, 2, "b"] */
// console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)); /* should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"] */