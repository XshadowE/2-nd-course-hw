// задание 1

function min(a, b) {
return a < b ? a : b;
}
let result1 = min(8, 4);
let result2 = min(6, 6);
console.log(result1, result2);

// задание 2

function num(n) {
    let = n % 2 === 0;
    if (n % 2 === 0) {
        console.log('число четное');
    } else {
        console.log('число нечетное'); 
    }
}
num(7);
num(8);

// задание 3

function calc(x, y) {
    let mult = x**y;
    console.log(mult);
}
calc(5, 2);
     
function ret(x, y) {
    return x**y;
}    
let result = ret(5, 2);
alert(result);

// задание 4

function age (question, answer) {
    let userAnswer = prompt (question);
    if (userAnswer < 0 ) {
        alert('Вы ввели неправильное значение');
        return age;
    } if (userAnswer >= 0 && userAnswer <= 12 ) {
        alert('Привет, друг!');
    } else {
       alert('Добро пожаловать!'); 
    }
}
    age('Сколько Вам лет?');

 // задание 5

 function check(a, b) {
    let numUser = Number (prompt('Введите два числа'));
    if (isNaN(numUser)) {
        alert('Одно или оба значения не являются числом');
        return check;
    } else {
        let sum = a + b;
    } alert(`${a + b}`);
 }
 check(4, 5);

 // задание 6

 function number(n) {
    let userNum = Number(prompt('Введите число'));
    if (isNaN(userNum)) {
        alert('Переданный параметр не является числом');
        return number;
    } else {
         degree = (n***3);
    } alert(`${n} в кубе равняется ${degree}`);
 }
 number(0);


