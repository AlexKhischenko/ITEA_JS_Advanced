/*
Task
Algorithm Scripting: Reverse a String
*/

/* ---------- Imperative method ---------- */

// // Variable declaration
// var result;

// // Function declaration
// function reverseString(str) {
//   var strLength = str.length,
//       reversedString = '',
//       i = strLength - 1;
  
//     // String iteration and creation a new one
//     for (i; i >= 0; i -= 1) {
//       reversedString += str[i];
//     }
//   return reversedString;
// }

// result = reverseString("Hello World");
// console.log(result);


/* ---------- Declarative method ---------- */

// // Variable declaration
// var result;

// // Function declaration
// function reverseString(str) {
//   str = str.split('').reverse().join('');
//   return str;
// }

// result = reverseString("Hello World");
// console.log(result);


/* ---------- Additional solution ---------- */

// Variable declaration
var result;

// Function declaration
function reverseString(str) {
  var strLength = str.length,
      i = strLength - 1;
  
  for (i; i >= 0; i -= 1) {
    str += str[i];
  }
  str = str.substring(strLength);
  return str;
}

result = reverseString("Hello");
console.log(result);