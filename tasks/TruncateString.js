/*
Task
Algorithm Scripting: Truncate a String
*/

/* ---------- Imperative method ---------- */

function truncateString(str, num) {
  var newStr = '',
      i = 0;
  if (str.length > num) {
    for (i; i < num; i += 1) {
      newStr += str[i];
    }
    return newStr + '...';
  } else {
    return str;
  }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8)); /* A-tisket... */
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11)); /* Peter Piper... */
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)); /* A-tisket a-tasket A green and yellow basket */
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)); /* A-tisket a-tasket A green and yellow basket */
console.log(truncateString("A-", 1)); /* A... */
console.log(truncateString("Absolutely Longer", 2)); /* Ab... */


/* ---------- Declarative method ---------- */

// function truncateString(str, num) {
//   if (str.length > num) {
//     return str.slice(0, num) + '...';
//   } else {
//     return str;
//   }
// }

// console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8)); /* A-tisket... */
// console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11)); /* Peter Piper... */
// console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)); /* A-tisket a-tasket A green and yellow basket */
// console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)); /* A-tisket a-tasket A green and yellow basket */
// console.log(truncateString("A-", 1)); /* A... */
// console.log(truncateString("Absolutely Longer", 2)); /* Ab... */