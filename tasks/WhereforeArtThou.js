/*
Task
Intermediate Algorithm Scripting: Wherefore art thou
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.
*/

/* ---------- Imperative method ---------- */

function whatIsInAName(collection, source) {
  var arr = [],
      counter,
      size = collection.length,
      i = 0;

  for (i; i < size; i += 1) {
    counter = 0;
    for (var key in source) {
      for (var prop in collection[i]) {
        if (key === prop && source[key] === collection[i][prop]) {
          ++counter;
        }
      }
      --counter;
    }
    if (!counter) {
      arr.push(collection[i]);
    }
  }

  return arr;
}

console.log(whatIsInAName([
  { first: "Romeo", last: "Montague" },
  { first: "Mercutio", last: null },
  { first: "Tybalt", last: "Capulet" }
  ],
  { last: "Capulet" })); /* should return [{ first: "Tybalt", last: "Capulet" }] */
console.log(whatIsInAName([
  { "apple": 1 },
  { "apple": 1 },
  { "apple": 1, "bat": 2 }
  ],
  { "apple": 1 })); /* should return [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }] */
console.log(whatIsInAName([
  { "apple": 1, "bat": 2 },
  { "bat": 2 },
  { "apple": 1, "bat": 2, "cookie": 2 }
  ],
  { "apple": 1, "bat": 2 })); /* should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }] */
console.log(whatIsInAName([
  { "apple": 1, "bat": 2 },
  { "apple": 1 },
  { "apple": 1, "bat": 2, "cookie": 2 }
  ],
  { "apple": 1, "cookie": 2 })); /* should return [{ "apple": 1, "bat": 2, "cookie": 2 }] */
console.log(whatIsInAName([
  { "apple": 1, "bat": 2 },
  { "apple": 1 },
  { "apple": 1, "bat": 2, "cookie": 2 },
  { "bat":2 }
  ],
  { "apple": 1, "bat": 2 })); /* should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }] */
console.log(whatIsInAName([
  {"a": 1, "b": 2, "c": 3}
  ],
  {"a": 1, "b": 9999, "c": 3})); /* should return [] */


/* ---------- Declarative method ---------- */

// function whatIsInAName(collection, source) {
//   var arr = [],
//       sourceProperties = Object.keys(source);
  
//   arr = collection.filter(function(object) {
//     return sourceProperties.every(function(prop) {
//       return object.hasOwnProperty(prop) && object[prop] === source[prop];
//     });
//   });

//   return arr;
// }