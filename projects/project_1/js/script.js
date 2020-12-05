/* 
Project №1
When you click on the button, output a quote from an array, the index of which is randomly generated.
The quote should not be displayed twice in a row.
*/

// Variables declaration
var mainButton = document.querySelector('.main_btn'),
    mainText = document.querySelector('.main_text'),
    previousNumber = null,
    random,
    quotesArray = [
      '"Если не бегаешь, пока здоров, придется побегать, когда заболеешь"',
      '"Ничто так сильно не разрушает человека, как продолжительное бездействие"',
      '"Птицы поднимаются выше, когда летят против ветра"',
      '"Ничто так не обманывает нас, как наше мнение"',
      '"Мудрый человек требует всего только от себя, ничтожный же человек — всего от других"',
      '"Дорога, под названием «потом» – ведет в страну, под названием «никуда»"',
      '"Настоящая красота живёт в сердце, отражается в глазах и проявляется в поступках"',
      '"Жизнь очень проста, это человек внес в нее сложность"',
      '"Неудача - это просто возможность начать снова, но уже более мудро"',
      '"Никакие проблемы не страшны, если дома тебя ждут любящие люди"'];

function showQuote() {
  do { /* Checking if the generated number is equal to the generated number in the previous step */
    random = Math.floor(Math.random() * quotesArray.length);
  } while (random === previousNumber);
  previousNumber = random;  
  mainText.innerHTML = quotesArray[random];
}
showQuote(); /* Calling a function to generate a quote on the start page */
mainButton.addEventListener('click', showQuote); /* Add event listener */
