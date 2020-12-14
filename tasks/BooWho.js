/*
Task
Algorithm Scripting: Boo who
Check if a value is classified as a boolean primitive. Return true or false.
*/

/* ---------- Imperative method ---------- */

function booWho(bool) {
  switch (bool) {
    case true:
    case false:
      return true;
    default:
      return false;
  }
}

console.log(booWho(null)); /* should return false */
console.log(booWho(true)); /* should return true */
console.log(booWho(false)); /* should return true */
console.log(booWho([1, 2, 3])); /* should return false */
console.log(booWho([].slice)); /* should return false */
console.log(booWho({ "a": 1 })); /* should return false */
console.log(booWho(1)); /* should return false */
console.log(booWho(NaN)); /* should return false */
console.log(booWho("a")); /* should return false */
console.log(booWho("true")); /* should return false */
console.log(booWho("false")); /* should return false */


/* ---------- Declarative method ---------- */

// function booWho(bool) {
//   return typeof(bool) === 'boolean';
// }

// console.log(booWho(null)); /* should return false */
// console.log(booWho(true)); /* should return true */
// console.log(booWho(false)); /* should return true */
// console.log(booWho([1, 2, 3])); /* should return false */
// console.log(booWho([].slice)); /* should return false */
// console.log(booWho({ "a": 1 })); /* should return false */
// console.log(booWho(1)); /* should return false */
// console.log(booWho(NaN)); /* should return false */
// console.log(booWho("a")); /* should return false */
// console.log(booWho("true")); /* should return false */
// console.log(booWho("false")); /* should return false */