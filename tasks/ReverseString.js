/*
Task
Algorithm Scripting: Reverse a String
*/

/* ---------- Imperative method ---------- */

// Function declaration
function reverseString(str) {
  var strLength = str.length,
      reversedString = '',
      i = strLength - 1;
  
    // String iteration and creation a new one
    for (i; i >= 0; i -= 1) {
      reversedString += str[i];
    }
  return reversedString;
}

console.log( reverseString("JavaScript") );


/* ---------- Declarative method ---------- */

// // Function declaration
// function reverseString(str) {
//   str = str.split('').reverse().join('');
//   return str;
// }

// console.log( reverseString("JavaScript") );


/* ---------- Additional solution ---------- */

// // Function declaration
// function reverseString(str) {
//   var strLength = str.length,
//       i = strLength - 1;
  
//   for (i; i >= 0; i -= 1) {
//     str += str[i];
//   }
//   str = str.substring(strLength);
//   return str;
// }

// console.log( reverseString("JavaScript") );