/*
Task
Algorithm Scripting: Confirm the Ending
*/

/* ---------- Imperative method ---------- */

function confirmEnding(str, target) {
  var i = 0,
      targetLength = target.length,
      newStr;

  newStr = str.slice(str.length - targetLength, str.length); /* Get a part of a sentence */
  for (i; i < targetLength; i +=1) {
    if (newStr[i] === target[i]) {
      continue;
    } else {
      return false;
    }
  }
 return true;
}
console.log(confirmEnding("Bastian", "n")); /* true */
console.log(confirmEnding("Open sesame", "sage")); /* false */
console.log(confirmEnding("Congratulation", "on")); /* true */
console.log(confirmEnding("Open sesame", "same")); /* true */
console.log(confirmEnding("Open sesame", "game")); /* false */


/* ---------- Declarative method ---------- */

// function confirmEnding(str, target) {
//  return target === str.slice(str.length - target.length, str.length); /* Get and check a part of a sentence */
// }

// console.log(confirmEnding("Bastian", "n")); /* true */
// console.log(confirmEnding("Open sesame", "sage")); /* false */
// console.log(confirmEnding("Congratulation", "on")); /* true */
// console.log(confirmEnding("Open sesame", "same")); /* true */
// console.log(confirmEnding("Open sesame", "game")); /* false */