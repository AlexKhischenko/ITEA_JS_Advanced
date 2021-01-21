/*
Task
Intermediate Algorithm Scripting: Missing Letters
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
Base pairs are a pair of AT and CG. Match the missing element to the provided character.
Return the provided character as the first element in each array.
For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
*/

/* ---------- Imperative method ---------- */

function fearNotLetter(str) {
  const fullStr = "abcdefghijklmnopqrstuvwxyz",
        strLength = str.length;
  let i = fullStr.indexOf(str[0]) + 1,
      j = 1;
  
  if (fullStr.indexOf(str[0]) !== -1) {
    for (j; j < strLength; j += 1) {
      if (str[j] === fullStr[i]) {
        ++i;
        continue; 
      }
      return fullStr[i];
    }
  }
  return;
}

console.log(fearNotLetter("abce")); /* should return "d" */
console.log(fearNotLetter("abcdefghjklmno")); /* should return "i" */
console.log(fearNotLetter("stvwx")); /* should return "u" */
console.log(fearNotLetter("bcdf")); /* should return "e" */
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz")); /* should return undefined */