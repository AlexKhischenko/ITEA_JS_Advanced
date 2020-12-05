/*
Task
Algorithm Scripting: Show simple numbers from 0 to 150
*/

// Function declaration
function showSimpleNumbers() {
  var counter,
      i = 0;
  for (i; i <= 150; i += 1) {
    counter = true;
    if (i === 0) {
      continue;
    } else {
      for (var j = 2; j < i; j++) {
        if (i % j === 0) {
          counter = false;
          continue;
        }
      }
    }
    if (counter) {
      console.log(i);
    }
  }
}
showSimpleNumbers();