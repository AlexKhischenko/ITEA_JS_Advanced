/*
Task
Intermediate Algorithm Scripting: Right Close Brackets
*/

/* ---------- Imperative method ---------- */

function validParens(s) {
  var i = 0,
      size = s.length,
      b1,
      b2,
      b3;

  for (i; i < size; i += 1) {
    switch(s[i]) {
      case '(':
        b1 = i;
        break;
      case ')':
        b1 += i;
        b1 = b1 % 2;
        break;
      case '[':
        b2 = i;
        break;
      case ']':
        b2 += i;
        b2 = b2 % 2;
        break;
      case '{':
        b3 = i;
        break;
      case '}':
        b3 += i;
        b3 = b3 % 2;
        break;
      default:
        return false;
    }
  }

  if ( (b1 === undefined || b1 === 1) && (b2 === undefined || b2 === 1) && (b3 === undefined || b3 === 1) ) {
    return true;
  }
  return false;
}

console.log(validParens('()[]{}')); /* should return true */
console.log(validParens('{[]}')); /* should return true */
console.log(validParens('({[]})')); /* should return true */
console.log(validParens('[]')); /* should return true */
console.log(validParens('a[]')); /* should return false */
console.log(validParens('(]')); /* should return false */
console.log(validParens('([)]')); /* should return false */
console.log(validParens('([{})]')); /* should return false */


/* ---------- Declarative method ---------- */

// function validParens(s) {
//   var symbols = '()[]{}',
//       size = s.length,
//       i = 0,
//       currentPosition,
//       arr = [];
  
//   for(i = 0; i < size; i += 1) {
//     currentPosition = symbols.indexOf(s[i]);
    
//     if (currentPosition === -1) return false;
    
//     if (currentPosition % 2 === 0) arr.push(currentPosition);

//     if (currentPosition % 2 === 1) {
//       if (currentPosition - 1 === arr[arr.length - 1]) {
//         arr.pop();
//       } else {
//         return false;
//       }
//     }
//   }

//   if (arr.length === 0) return true;
//   return false;
// }