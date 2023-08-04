// задание 1
let a;
a = 10;
alert (a);

a = 20;
alert (a);

// задание 2
let year = 2007;
// year = prompt('Год выпуска первого iPhone');
alert (year);

// задание 3
let userName = "Брендан Эйх";
// Имя создателя языка JavaScript');
alert (userName);

// задание 4
let x = 10;
let y = 2;
alert (x + y);
alert (x - y);
alert (x / y);
alert (x * y);

// задание 5
let b = 2;
result = b ** 5;
alert(b ** 5);

// задание 6
a = 9;
b = 2;
alert (a % b);

// задание 7
let num = 1;
console.log (num +=5); //6
console.log (num -=3); //3
console.log (num *=7); //21
console.log (num /=3); //7
console.log (num +=1); //8
console.log (num -=1); //7
alert(num);

// задание 8
let age;
age = prompt('Сколько вам лет?');
alert (age);

// задание 9
const user = {
    userName: 'Вася',
    age: 28,
    isAdmin: true
} 
console.log(user);

user['city of residence'] = 'Новосибирск';

delete user ['city of residence']

const key = 'age';
user [key] = 33;
console.log(user);

let info = prompt('Какую информацию хотите узнать о пользователе?');
alert(user[info]);

// задание 10
let newNameUser = prompt('Как Вас зовут?');
alert( `Привет, ${newNameUser} !`);
