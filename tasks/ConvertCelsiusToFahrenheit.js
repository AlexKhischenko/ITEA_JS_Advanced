/*
Task
Algorithm Scripting: Convert Celsius to Fahrenheit
*/

// Variable declaration
var result;

// Function declaration
function convertToFahrenheit(celsius) {
  let fahrenheit;
  fahrenheit = celsius * 9 / 5 + 32;
  return fahrenheit;
}

result = convertToFahrenheit(30);
console.log(`Your result: ${result}F`);