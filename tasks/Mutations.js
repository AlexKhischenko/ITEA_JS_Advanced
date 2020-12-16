/*
Task
Algorithm Scripting: Mutations
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
*/

/* ---------- Imperative method ---------- */

function mutation(arr) {
  var first = arr[0].toLowerCase(),
      second = arr[1].toLowerCase(),
      marker,
      i,
      j;
  for (i = 0; i < second.length; i += 1) {
    for (j = 0; j < first.length; j += 1) {
      if (second[i] === first[j]) {
        marker = true;
        break;
      } else {
        marker = false;
      }
    }
    if (!marker) {
      break;
    }
  }
  return marker;
}

console.log(mutation(["hello", "hey"])); /* should return false */
console.log(mutation(["hello", "Hello"])); /* should return true */
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])); /* should return true */
console.log(mutation(["Mary", "Army"])); /* should return true */
console.log(mutation(["Mary", "Aarmy"])); /* should return true */
console.log(mutation(["Alien", "line"])); /* should return true */
console.log(mutation(["floor", "for"])); /* should return true */
console.log(mutation(["hello", "neo"])); /* should return false */
console.log(mutation(["voodoo", "no"])); /* should return false */
console.log(mutation(["ate", "date"])); /* should return false */
console.log(mutation(["Tiger", "Zebra"])); /* should return false */
console.log(mutation(["Noel", "Ole"])); /* should return true */


/* ---------- Declarative method ---------- */

// function mutation(arr) {
//   var first = arr[0].toLowerCase(),
//       second = arr[1].toLowerCase();
//   return second.split('').every(function(item) {
//     return first.indexOf(item) !== -1;
//   });
// }

// console.log(mutation(["hello", "hey"])); /* should return false */
// console.log(mutation(["hello", "Hello"])); /* should return true */
// console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])); /* should return true */
// console.log(mutation(["Mary", "Army"])); /* should return true */
// console.log(mutation(["Mary", "Aarmy"])); /* should return true */
// console.log(mutation(["Alien", "line"])); /* should return true */
// console.log(mutation(["floor", "for"])); /* should return true */
// console.log(mutation(["hello", "neo"])); /* should return false */
// console.log(mutation(["voodoo", "no"])); /* should return false */
// console.log(mutation(["ate", "date"])); /* should return false */
// console.log(mutation(["Tiger", "Zebra"])); /* should return false */
// console.log(mutation(["Noel", "Ole"])); /* should return true */