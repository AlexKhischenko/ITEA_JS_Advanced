/*
Task
Intermediate Algorithm Scripting: Search and Replace
Perform a search and replace on the sentence using the arguments provided and return the new sentence.
First argument is the sentence to perform the search and replace on.
Second argument is the word that you will be replacing (before).
Third argument is what you will be replacing the second argument with (after).
Note
Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"
*/

/* ---------- Imperative method ---------- */

function myReplace(str, before, after) {
  let newStr = str.split(' '),
      i = 0,
      arrSize = newStr.length;

  for(i; i < arrSize; i += 1) {
    if (newStr[i] === before && before[0] === before[0].toLowerCase()) {
      newStr[i] = after[0].toLowerCase() + after.slice(1);
    }
    if (newStr[i] === before && before[0] === before[0].toUpperCase()) {
      newStr[i] = after[0].toUpperCase() + after.slice(1);
    }
  }

  return newStr.join(' ');
}

console.log(myReplace("Let us go to the store", "store", "mall")); /* should return "Let us go to the mall" */
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting")); /* should return "He is Sitting on the couch" */
console.log(myReplace("I think we should look up there", "up", "Down")); /* should return "I think we should look down there" */
console.log(myReplace("This has a spellngi error", "spellngi", "spelling")); /* should return "This has a spelling error" */
console.log(myReplace("His name is Tom", "Tom", "john")); /* should return "His name is John" */
console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms")); /* should return "Let us get back to more Algorithms" */


/* ---------- Declarative method ---------- */

// function myReplace(str, before, after) {
//   return str.split(' ').map((word) => {
//     if (word === before && before[0] === before[0].toLowerCase()) {
//       return word = after[0].toLowerCase() + after.slice(1);
//     }
//     if (word === before && before[0] === before[0].toUpperCase()) {
//       return word = after[0].toUpperCase() + after.slice(1);
//     }
//     return word;
//   }).join(' ');
// }