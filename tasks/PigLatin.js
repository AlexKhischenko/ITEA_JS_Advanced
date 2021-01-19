/*
Task
Intermediate Algorithm Scripting: Pig Latin
Pig Latin is a way of altering English Words. The rules are as follows:
- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.
- If a word begins with a vowel, just add "way" at the end.
*/

/* ---------- Imperative method ---------- */

function translatePigLatin(str) {
  let i = 0,
      tempStr = '',
      pattern = 'ay',
      strSize = str.length;

  for (i; i < strSize; i += 1) {
    if (i === 0 && checkVowels(str[i])) return str + 'way';
    if (!checkVowels(str[i])) {
      tempStr += str[i];
      continue;
    }
    return str.slice(tempStr.length) + tempStr + pattern;
  }
  return str + pattern;
}

function checkVowels(letter) {
  return /[aeiouAUIOE]/.test(letter);
}


console.log(translatePigLatin("california")); /* should return "aliforniacay" */
console.log(translatePigLatin("paragraphs")); /* should return "aragraphspay" */
console.log(translatePigLatin("glove")); /* should return "oveglay" */
console.log(translatePigLatin("algorithm")); /* should return "algorithmway" */
console.log(translatePigLatin("eight")); /* should return "eightway" */
console.log(translatePigLatin("schwartz")); /* should return "artzschway" */
console.log(translatePigLatin("rhythm")); /* should return "rhythmay" */


/* ---------- Declarative method ---------- */