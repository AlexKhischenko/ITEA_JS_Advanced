/* Решение одним циклом через строку */
function reverseVowels(str) {
  var strSize = str.length,
      tempStr = '',
      leftPart = '',
      rightPart = '',
      sentence = '',
      left = -1,
      right,
      i = 0,
      j;
  
  /* За одну итерацию цикла будем проверять одну букву в начале и одну в конце */
  for (i; i < strSize; i += 1) {
    j = strSize - 1 - i; /* j отвечает за проверку букв с конца */

    if (i < j) {
      if (checkVowels(str[i])) {
        leftPart = str[i] + leftPart; /* Формируем строку гласных левой части слова в обратном порядке */
      }
      if (checkVowels(str[j])) {
        rightPart += str[j]; /* Формируем строку гласных правой части слова в обратном порядке */
      }
    }

    if (i === j) {
      tempStr = str[i]; /* Записываем гласную или согласную на текущую позицию */
    }

    if (i > j) {
      if (left === -1) {
        sentence = rightPart + leftPart; /* Формируем строку гласных букв путем конкатенации двух строк */
        left = leftPart.length - 1; /* Коэффициент, отвечающий за перебор гласных букв строки гласных в левую сторону */
        right = leftPart.length; /* Коэффициент, отвечающий за перебор гласных букв строки гласных в правую сторону */
      }
      if (checkVowels(str[i])) {
        tempStr += sentence[right]; /* Записываем гласную из строки гласных на текущую позицию */
        ++right; /* Увеличиваем коэффициент */
      } else {
        tempStr += str[i]; /* Конкатенируем согласную на текущую позицию */
      }
      if (checkVowels(str[j])) {
        tempStr = sentence[left] + tempStr; /* Записываем гласную из строки гласных на текущую позицию */
        --left; /* Уменьшаем коэффициент */
      } else {
        tempStr = str[j] + tempStr; /* Конкатенируем согласную на текущую позицию */
      }
    }
  }
  return tempStr;
}

function checkVowels(letter) {
  return /[aeiouAUIOE]/.test(letter);
}

console.log(reverseVowels('umbrella'));
console.log(reverseVowels('function'));
console.log(reverseVowels('unbelievable'));
console.log(reverseVowels('beautiful'));
console.log(reverseVowels('organization'));



/* Решение одним циклом через массив и преобразование в строку */
// function reverseVowels(str) {
//   var strSize = str.length,
//       tempArr = new Array(strSize),
//       tempStr = '',
//       leftPart = '',
//       rightPart = '',
//       sentence = '',
//       left = -1,
//       right,
//       i = 0,
//       j;
  
//   /* За одну итерацию цикла будем проверять одну букву в начале и одну в конце */
//   for (i; i < strSize; i += 1) {
//     j = strSize - 1 - i; /* j отвечает за проверку букв с конца */

//     if (i < j) {
//       if (checkVowels(str[i])) {
//         leftPart = str[i] + leftPart; /* Формируем строку гласных левой части слова в обратном порядке */
//       } else {
//         tempArr[i] = str[i]; /* Записываем согласную на текущую позицию */
//       }
//       if (checkVowels(str[j])) {
//         rightPart += str[j]; /* Формируем строку гласных правой части слова в обратном порядке */
//       } else {
//         tempArr[j] = str[j]; /* Записываем согласную на текущую позицию */
//       }
//     }

//     if (i === j) {
//       tempArr[i] = str[i]; /* Записываем гласную или согласную на текущую позицию */
//     }

//     if (i > j) {
//       if (left === -1) {
//         sentence = rightPart + leftPart; /* Формируем строку гласных букв путем конкатенации двух строк */
//         left = leftPart.length - 1; /* Коэффициент, отвечающий за перебор гласных букв строки гласных в левую сторону */
//         right = leftPart.length; /* Коэффициент, отвечающий за перебор гласных букв строки гласных в правую сторону */
//       }
//       if (checkVowels(str[i])) {
//         tempArr[i] = sentence[right]; /* Записываем гласную из строки гласных на текущую позицию */
//         ++right; /* Увеличиваем коэффициент */
//       }
//       if (checkVowels(str[j])) {
//         tempArr[j] = sentence[left]; /* Записываем гласную из строки гласных на текущую позицию */
//         --left; /* Уменьшаем коэффициент */
//       }
//     }
//   }
//   return tempArr.join('');
// }

// function checkVowels(letter) {
//   return /[aeiouAUIOE]/.test(letter);
// }

// console.log(reverseVowels('umbrella'));
// console.log(reverseVowels('function'));
// console.log(reverseVowels('unbelievable'));
// console.log(reverseVowels('beautiful'));
// console.log(reverseVowels('organization'));



/* Решение двумя циклами, первый и которых состоит из половины итераций */
// function checkVowels(letter) {
//   return /[aeiouAUIOE]/.test(letter);
// }

// function reverseVowels(str) {
//   var leftPart = '',
//       rightPart = '',
//       centralLetter = '',
//       reversedVowels = '',
//       i,
//       strSize = str.length,
//       j = strSize - 1,
//       index = 0,
//       newStr = '';

//   for(i = 0; i <= j; i += 1) { /* Сокращаем проход в 2 раза */
//     if (i === j) {
//       if (checkVowels(str[i])) {
//         centralLetter = str[i];
//       }
//     } else {
//       if (checkVowels(str[i])) {
//         leftPart = str[i] + leftPart;
//       }
//       if (checkVowels(str[j])) {
//         rightPart += str[j];
//       }
//       j--;
//     }
//   }

//   reversedVowels = rightPart + centralLetter + leftPart;

//   for(i = 0; i < strSize; i += 1) {
//     if (checkVowels(str[i])) {
//       newStr += reversedVowels[index];
//       index++;
//     } else {
//       newStr += str[i];
//     }
//   }
//   return newStr;
// }

// console.log(reverseVowels('umbrella'));



/* Решение двумя циклами */
// function checkVowels(letter) {
//   return /[aeiouAUIOE]/.test(letter);
// }

// function reverseString(s) {
//   var vowels = '', i, j, size = s.length, result = '', count = 0;

//   for(i = size - 1; i >= 0; i -= 1) {
//       if(checkVowels(s[i])) {
//          vowels += s[i];
//       }
//   }

//   for(j = 0; j < size; j += 1) {
//       if(checkVowels(s[j])) {
//           result += vowels[count];
//           count += 1;
//       } else {
//           result += s[j];
//       }
//   }

//   return result;
// }

// console.log(reverseString('umbrella'));
// console.log(reverseString('function'));
// console.log(reverseString('unbelievable'));
// console.log(reverseString('beautiful'));
// console.log(reverseString('organization'));