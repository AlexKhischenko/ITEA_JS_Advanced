/*
Task
Algorithm Scripting: Factorialize a Number
*/

/* ---------- Imperative method ---------- */

// Function declaration
function factorialize(num) {
  if (num < 0) {
    return `error`;
  }
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorialize(num - 1);
  }
}

console.log(factorialize(5));

/* ---------- Declarative method ---------- */

// // Function declaration
// function factorialize(num) {
//   var temp = 1,
//       i = 1;
//   if (num < 0) {
//     return `error`;
//   } 
//   if (num === 0 || num === 1) {
//     return 1;
//   } else {
//     for (i; i <= num; i += 1) {
//       temp *= i;
//     }
//     return temp;
//   }
// }

// console.log(factorialize(5));