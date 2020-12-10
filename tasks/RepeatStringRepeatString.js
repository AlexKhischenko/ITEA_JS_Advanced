/*
Task
Algorithm Scripting: Repeat a String Repeat a String
*/

/* ---------- Imperative method ---------- */

function repeatStringNumTimes(str, num) {
  var newStr = '';
  if (num < 0) {
    return '';
  }
  for (let i = 1; i <= num; i++) {
    newStr += str;
  }
  return newStr;
}

console.log(repeatStringNumTimes("abc", 3)); /* abcabcabc */
console.log(repeatStringNumTimes("*", 8)); /* ******** */
console.log(repeatStringNumTimes("abc", -2)); /* '' */
console.log(repeatStringNumTimes("abc", 0)); /* '' */
console.log(repeatStringNumTimes("abc", 4)); /* abcabcabcabc */



/* ---------- Declarative method ---------- */

// function repeatStringNumTimes(str, num) {
//   if (num < 0) {
//     return '';
//   }
//   return str.repeat(num);
// }

// console.log(repeatStringNumTimes("abc", 3)); /* abcabcabc */
// console.log(repeatStringNumTimes("*", 8)); /* ******** */
// console.log(repeatStringNumTimes("abc", -2)); /* '' */
// console.log(repeatStringNumTimes("abc", 0)); /* '' */
// console.log(repeatStringNumTimes("abc", 4)); /* abcabcabcabc */