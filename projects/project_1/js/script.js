/* 
Project №1
When you click on the button, output a quote from an array, the index of which is randomly generated.
The quote should not be displayed twice in a row.
*/

// Variables declaration
var mainButton = document.querySelector('.main_btn'),
    mainText = document.querySelector('.main_text'),
    quotesArray = [],
    index = null,
    random;

// Filling an array with 10 quotes
quotesArray.push('"Если не бегаешь, пока здоров, придется побегать, когда заболеешь"');
quotesArray.push('"Ничто так сильно не разрушает человека, как продолжительное бездействие"');
quotesArray.push('"Птицы поднимаются выше, когда летят против ветра"');
quotesArray.push('"Ничто так не обманывает нас, как наше мнение"');
quotesArray.push('"Мудрый человек требует всего только от себя, ничтожный же человек — всего от других"');
quotesArray.push('"Дорога, под названием «потом» – ведет в страну, под названием «никуда»"');
quotesArray.push('"Настоящая красота живёт в сердце, отражается в глазах и проявляется в поступках"');
quotesArray.push('"Жизнь очень проста, это человек внес в нее сложность"');
quotesArray.push('"Неудача - это просто возможность начать снова, но уже более мудро"');
quotesArray.push('"Никакие проблемы не страшны, если дома тебя ждут любящие люди"');

// Declaration of the showQuote function, which generates a random number in the range from 0 to 9 and outputs a quote from an array under the index of the generated number
function showQuote() {
  // Checking if the generated number is equal to the generated number in the previous step
  do {
    random = Math.floor(Math.random() * 10);
  } while (random === index);
  index = random;  
  mainText.innerHTML = quotesArray[index];
}

// Calling a function to generate a quote on the start page
showQuote();

// Add event listener
mainButton.addEventListener('click', showQuote);


