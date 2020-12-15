/*
Task
Algorithm Scripting: Title Case a Sentence
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/

/* ---------- Imperative method ---------- */

function titleCase(str) {
  var tempStr = str.toLowerCase(),
      newStr = tempStr[0].toUpperCase(),
      i = 1;
  for (i; i < tempStr.length; i += 1) {
    if (tempStr[i] === ' ') {
      newStr = newStr + tempStr[i] + tempStr[i + 1].toUpperCase();
      i += 1;
    } else {
      newStr += tempStr[i];
    }
  }
  return newStr;
}

console.log(titleCase("I'm a little tea pot")); /* should return I'm A Little Tea Pot */
console.log(titleCase("sHoRt AnD sToUt")); /* should return Short And Stout */
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")); /* should return Here Is My Handle Here Is My Spout */

/* ---------- Declarative method ---------- */

// function titleCase(str) {
//   var newStr = str.toLowerCase().split(' ').map(function (item) {
//     return item[0].toUpperCase() + item.slice(1);
//   });
//   return newStr.join(' ');
// }

// console.log(titleCase("I'm a little tea pot"));/* should return I'm A Little Tea Pot */
// console.log(titleCase("sHoRt AnD sToUt")); /* should return Short And Stout */
// console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")); /* should return Here Is My Handle Here Is My Spout */