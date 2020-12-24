/*
1.
Обычная функция: this = window, в режиме use strict this - undefined
*/
function showThis() {
  // console.log(this); // window/undefined
}
showThis();

function showSum(a, b) {
  // console.log(this); // window/undefined
  function sum() {
    // console.log(this); // window/undefined
    return a + b;
  }
  sum();  
}
console.log(showSum(2, 4));


/*
2.
Контекст у мотодов объекта - сам объект
*/
var obj = {
  a: 20,
  b: 10,
  sum: function () {
    console.log(this); // obj
    function shout() {
      console.log(this); // window/undefined
    }
    shout();
  }
};
obj.sum();


/*
3. This в конструкторах и классах - это новый экземпляр объекта
*/
function User(name, surname) {
  this.name = name;
  this.surname = surname;
  this.human = true;
}
var alex = new User('Alex', 'Khischenko');

/*
4. Ручная привязка this: call, apply, bind
*/
function sayName(surname) {
  console.log(this);
  console.log(this.name + ' ' + surname);
}

var user = {
  name: 'Alex'
};

sayName.call(user, 'Khischenko'); // Аргументы передаются строками
sayName.apply(user, ['Khischenko']); // Аргументы передаются массивом (в этом разница между call и apply)

function count(num) {
  return this * num;
}

var double = count.bind(2);
console.log(double(13));

/* Примеры */
// Контекстом вызова для обработчика событий будет сам объект, на котором произошло событие (при классическом написании функции).
// При использовании стрелочной функции контекстом будет window/undefined
var btn = document.querySelector('button');
btn.addEventListener('click', function() {
  console.log(this); // btn
})

// Стрелочная функция всегда берет контекст своего родителя
var param = {
  num: 5,
  sayNumber: function() {
    var say = () => {
      console.log(this);
    };
    say();
  }
}
param.sayNumber();