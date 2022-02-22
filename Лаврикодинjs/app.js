let name = 'Adam'; // string
let age = 20; // number
let isMarried = false; // boolean - логическое
let lastName = undefined; // undefined
let userColor = null; // null


// Объект
let person = {
  name: 'Adam',
  age: 28,
}

console.log(person);


//через точку
person.age = 25;
console.log(person.age);

// через скобки
person['name'] = 'Rustam';
console.log(person['name']);


// массивы
let selectedColors = ['red','blue']; // отчет идет с нуля
selectedColors[2] = 'green'; // добавил третий цвет

console.log(selectedColors);
console.log(selectedColors.length); //выводит количество цветов в массиве


// функции
function sayHi(name, lastName){  // name  параметр
  console.log('hello ' + name + lastName);
}

sayHi('adam ', 'gvgbhn'); // adam аргумент
sayHi('mike ', 'qwert');


function square(number) {
  return number * number;
}
let number1 = square(4);
let number2 = square(8);


console.log(square(5));
console.log(number1);
console.log(number2);

/*
свойства
методы
события



let text = document.querySelector('#text');

text.onclick = function() {
  text.style.color = 'red';
  text.innerHTML += 'qwert ';
  text.className = 'test';
  text.style.fontSize = '50px';

}
*/

let btn_pref = document.querySelector('.button__pref');
let btn_next = document.querySelector('.button__next');

let images = document.querySelectorAll(".photos img");
let i = 0;


btn_next.onclick = function() {
  images[i].className = '';

  i++;

  if ( i >= images.length){
  i = 0;
  }

  images[i].className = 'photos__inner';

}



btn_pref.onclick = function() {
images[i].className = '';
  i--;

  if ( i < 0){
  i = images.length - 1;
  }

images[i].className = 'photos__inner';
}
