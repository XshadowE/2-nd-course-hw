// задание 1

function min(a, b) {
return a < b ? a : b;
}
let result1 = min(8, 4);
let result2 = min(6, 6);
console.log(result1, result2);

// задание 2

function num(n) {

    if (n % 2 === 0) {
        console.log('число четное');
    } else {
        console.log('число нечетное'); 
    }
}
num(7);
num(8);

// задание 3

function calc(x) {
    let mult = x**2;
    console.log(mult);
}
calc(5);
     
function ret(x) {
    return x**2;
}    
let result = ret(5);
alert(result);

// задание 4

function age (question) {
    let userAnswer = prompt (question);
    if (isNaN(userAnswer) || userAnswer === ' ' || userAnswer === null || userAnswer === "") {
      alert('введите число!!!');
    } else if(userAnswer < 0) {
        alert('Вы ввели неправильное значение');
    } else if(userAnswer <= 12) {
       alert('Привет друг!'); 
    } else if(userAnswer >= 13) {
        alert('Добро пожаловать');
    }
}
    age('Сколько Вам лет?');

 // задание 5

    function mult(y, z) {
    let w = prompt('Введите число');
    if (isNaN (Number(w)) || w === ' ' || w === null || w === "" ) {
        return('Одно или оба значения не являются числом');  
    }else {
    return w = (y * z);
    }
    }
    alert(mult(4, 5));

 // задание 6


    function number() {
    let userNum = prompt('Введите число');

    if (isNaN(userNum) || userNum === '') {
        alert('Переданный параметр не является числом');
    } else {
     alert(`${userNum} в кубе равняется ${userNum ** 3}`);
 }
}
 number();

 // задание 7

 function getCircleArea() {
        return 2 * this.pi * this.radius;
    }
 function getCirclePerimeter() {
        return this.pi * this.radius * this.radius;
    }
const circle1 = {
    radius: 2,
    pi: 3.14,
    getArea: getCircleArea,
    getPerimeter: getCirclePerimeter,
 };

 const circle2 = {
    radius: 8,
    pi: 3.14,
    getArea: getCircleArea,
    getPerimeter: getCirclePerimeter,
 };

console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());
