/*
Task
Intermediate Algorithm Scripting: Wherefore art thou
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.
*/

/* ---------- Imperative method ---------- */

function spinalCase(str) {
  var size = str.length,
      i = 1,
      j = 0,
      toggle = 0,
      tempStr = str[0].toLowerCase(),
      newStr = '';

  for (i; i < size; i += 1) {
    if (str[i] === str[i].toUpperCase() && str[i] !== ' ' && str[i] !== '_' && str[i] !== '-') {
      tempStr += '-' + str[i].toLowerCase();
    } else if (str[i] === '_') {
      tempStr += '';
    } else {
      tempStr += str[i];
    }
  }

  size = tempStr.length;
  for (j; j < size; j += 1) {
    if (tempStr[j] === ' ') {
      toggle = 1;
    } else if (tempStr[j] === '-' && toggle === 1) {
      newStr += tempStr[j];
      toggle = 0;
    } else if (tempStr[j] !== '-' && toggle === 1) {
      newStr += '-' + tempStr[j];
      toggle = 0;
    } else {
      newStr += tempStr[j];
    }
  }

  return newStr;
}

console.log(spinalCase("This Is Spinal Tap")); /* should return "this-is-spinal-tap" */
console.log(spinalCase("thisIsSpinalTap")); /* should return "this-is-spinal-tap" */
console.log(spinalCase("The_Andy_Griffith_Show")); /* should return "the-andy-griffith-show" */
console.log(spinalCase("Teletubbies say Eh-oh")); /* should return "teletubbies-say-eh-oh" */
console.log(spinalCase("AllThe-small Things")); /* should return "all-the-small-things" */



/* ---------- Declarative method ---------- */

// function spinalCase(str) {
//   var regularExpression = /\s|_|(?=[A-Z])/;
  
//   return str.split(regularExpression).join('-').toLowerCase();
// }