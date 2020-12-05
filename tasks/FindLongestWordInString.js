/*
Task
Algorithm Scripting: Find the Longest Word in a String
*/

/* ---------- Imperative method ---------- */

// Function declaration
function findLongestWordLength(str) {
  var numberOfLetters = 0,
      longestWord = [],
      arrayOfWords = [];
  
  arrayOfWords = str.split(' '); /* Transform string to array */
  arrayOfWords.forEach(function (item) {
    if (item.length > numberOfLetters) {
      longestWord = item;
      numberOfLetters = item.length;
    }
  });

  console.log(`The longest word is ${longestWord.toUpperCase()}, that includes ${numberOfLetters} letters`);
}
findLongestWordLength("What if we try a super-long word such as otorhinolaryngology");
findLongestWordLength("The quick brown fox jumped over the lazy dog");
findLongestWordLength("May the force be with you");
findLongestWordLength("Google do a barrel roll");
findLongestWordLength("What is the average airspeed velocity of an unladen swallow");



/* ---------- Declarative method ---------- */

// // Main function declaration
// function findLongestWordLength(str) {
//   var counter = 0,
//       numberOfLetters = 0,
//       longestWord = '',
//       currentWord = '';

//   // CheckCounter function
//   function checkCounter(count, num, word) {
//     if (count > num) {
//       numberOfLetters = count;
//       longestWord = word;
//     }
//   }
//   // Main cycle
//   for (var i = 0; i < str.length; i++) {
//     if (str[i] === ' ') {
//       checkCounter(counter, numberOfLetters, currentWord);
//       counter = 0;
//       currentWord = '';
//     } else {
//       currentWord += str[i];
//       counter++;
//     }
//   }
//   checkCounter(counter, numberOfLetters, currentWord);
//   console.log(`The longest word is ${longestWord.toUpperCase()}, that includes ${numberOfLetters} letters`);
// }
// findLongestWordLength("What if we try a super-long word such as otorhinolaryngology");
// findLongestWordLength("The quick brown fox jumped over the lazy dog");
// findLongestWordLength("May the force be with you");
// findLongestWordLength("Google do a barrel roll");
// findLongestWordLength("What is the average airspeed velocity of an unladen swallow");