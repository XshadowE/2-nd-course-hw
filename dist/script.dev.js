"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// задание 1
var a;
a = 10;
alert(a);
a = 20;
alert(a); // задание 2

var year = 2007; // year = prompt('Год выпуска первого iPhone');

alert(year); // задание 3

var userName = "Брендан Эйх"; // Имя создателя языка JavaScript');

alert(userName); // задание 4

var x = 10;
var y = 2;
alert(x + y);
alert(x - y);
alert(x / y);
alert(x * y); // задание 5

var b = 2;
result = Math.pow(b, 5);
alert(Math.pow(b, 5)); // задание 6

a = 9;
b = 2;
alert(a % b); // задание 7

var num = 1;
console.log(num += 5); //6

console.log(num -= 3); //3

console.log(num *= 7); //21

console.log(num /= 3); //7

console.log(num += 1); //8

console.log(num -= -1); //9

alert(num); // задание 8

var age;
age = prompt('Сколько вам лет?');
alert(age); // задание 9

var user = _defineProperty({
  userName: 'Вася',
  age: 28,
  isAdmin: true
}, "city of residence", 'Новосибирск');

console.log(user);
delete user["city of residence"];
var key = 'age';
user[key] = 33;
console.log(user);
var info = prompt('Какую информацию хотите узнать о пользователе?');
alert(user[info]); // задание 10

var newNameUser = prompt('Как Вас зовут?');
alert("\u041F\u0440\u0438\u0432\u0435\u0442, ".concat(newNameUser, " !"));