// function reverseVowels(str) {
//   var strSize = str.length,
//       tempArr = new Array(strSize),
//       leftPart = '',
//       rightPart = '',
//       sentence = '',
//       start = 0,
//       end,
//       i = 0,
//       j;
//   // debugger;
//   for (i; i < strSize; i += 1) {
//     j = strSize - 1 - i;

//     if (i < j) {
//       if (checkVowels(str[i])) {
//         leftPart += str[i];
//       } else {
//         tempArr[i] = str[i];
//       }
//       if (checkVowels(str[j])) {
//         rightPart = str[j] + rightPart;
//       } else {
//         tempArr[j] = str[j];
//       }
//     }

//     if (i === j) {
//       if (checkVowels(str[i])) {
//         if(leftPart.length === rightPart.length) {
//           tempArr[i] = str[i];
//         } else {
//           rightPart = str[j] + rightPart;
//           sentence = rightPart + leftPart;
//           end = sentence.length - 1;
//           tempArr[i] = sentence[end];
//           end--;
//         }
//         sentence = rightPart + leftPart;
//         end = sentence.length - 1;
//       } else {
//           tempArr[i] = str[i];
//           sentence = rightPart + leftPart;
//           end = sentence.length - 1;
//       }
//     }

//     if (i === strSize / 2 && strSize % 2 === 0) {
//       sentence = rightPart + leftPart;
//       end = sentence.length - 1;
//     }

//     if (i > j) {
//       if (checkVowels(str[i])) {
//         tempArr[i] = sentence[end];
//         end--;
//       }
//       if (checkVowels(str[j])) {
//         tempArr[j] = sentence[start];
//         start++;
//       }
//     }
//   }
//   // console.log(leftPart, rightPart);
//   return tempArr.join('');
// }

// function checkVowels(letter) {
//   return /[aeiouAUIOE]/.test(letter);
// }

// console.log(reverseVowels('hello'));

function checkVowels(letter) {
  return /[aeiouAUIOE]/.test(letter);
}

function reverseVowels(str) {
  var leftPart = '',
      rightPart = '',
      centralLetter = '',
      reversedVowels = '',
      i,
      strSize = str.length,
      j = strSize - 1,
      index = 0,
      newStr = '';

  for(i = 0; i <= j; i += 1) { /* Сокращаем проход в 2 раза */
    if (i === j) {
      if (checkVowels(str[i])) {
        centralLetter = str[i];
      }
    } else {
      if (checkVowels(str[i])) {
        leftPart = str[i] + leftPart;
      }
      if (checkVowels(str[j])) {
        rightPart += str[j];
      }
      j--;
    }
  }

  reversedVowels = rightPart + centralLetter + leftPart;

  for(i = 0; i < strSize; i += 1) {
    if (checkVowels(str[i])) {
      newStr += reversedVowels[index];
      index++;
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}

console.log(reverseVowels('umbrella'));








function checkVowels(letter) {
  return /[aeiouAUIOE]/.test(letter);
}

function reverseString(s) {
  var vowels = '', i, j, size = s.length, result = '', count = 0;

  for(i = size - 1; i >= 0; i -= 1) {
      if(checkVowels(s[i])) {
         vowels += s[i];
      }
  }

  for(j = 0; j < size; j += 1) {
      if(checkVowels(s[j])) {
          result += vowels[count];
          count += 1;
      } else {
          result += s[j];
      }
  }

  return result;
}

console.log(reverseString('umbrella'));