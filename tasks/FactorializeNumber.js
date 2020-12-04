/*
Task
Algorithm Scripting: Factorialize a Number
*/

/* ---------- Imperative method ---------- */

// Variable declaration
var result;

// Function declaration
function factorialize(num) {
  if (num < 0) {
    return `error`;
  } else if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorialize(num - 1);
  }
}

result = factorialize(10);
console.log(result);

/* ---------- Declarative method ---------- */

// // Variable declaration
// var result;

// // Function declaration
// function factorialize(num) {
//   var temp = 1,
//       i = 1;
//   if (num < 0) {
//     return `error`;
//   } else if (num === 0 || num === 1) {
//     return 1;
//   } else {
//     for (i; i <= num; i += 1) {
//       temp *= i;
//     }
//     return temp;
//   }
// }

// result = factorialize(10);
// console.log(result);