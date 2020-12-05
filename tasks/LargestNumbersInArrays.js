/*
Task
Algorithm Scripting: Return Largest Numbers in Arrays
*/

/* ---------- Imperative method ---------- */

// Function declaration
function largestOfFour(arr) {
  var lagestNumberInArray = -Infinity,
      returnedArray = [],
      arraySize = arr.length,
      result,
      i = 0,
      j;

  for (i; i < arraySize; i += 1) { /* Use loop in main array */
    for (j = 0; j < arr[i].length; j += 1) { /* Use loop in subarray */
      if (arr[i][j] > lagestNumberInArray) { /* Looking for the lagest number in subarray */
        lagestNumberInArray = arr[i][j];
      }
    }
    returnedArray.push(lagestNumberInArray); /* Write down the lagest number in returned array */
    lagestNumberInArray = -Infinity; /* Discard the lagest number */
  }
  result = `Массив наибольших чисел подмассивов: [${returnedArray}]`;
  console.log(result);
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]);
largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);


/* ---------- Declarative method ---------- */

// // Function declaration
// function largestOfFour(arr) {
//   var returnedArray = [],
//       arraySize = arr.length,
//       result,
//       i = 0;

//   for (i; i < arraySize; i += 1) { /* Use loop in main array */
//     returnedArray.push(Math.max.apply(null, arr[i])); /* Looking for the lagest number in subarray and push it in returned array */
//   }

//   result = `Массив наибольших чисел подмассивов: [${returnedArray}]`;
//   console.log(result);
// }

// largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
// largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]);
// largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);