// задание 1
let password = 'пароль';
let answer = prompt('Введите пароль');

answer=answer.toLocaleLowerCase();

if (answer ==='пароль') {
    alert('Пароль введен верно');
}
else {
        alert('Пароль введен неправильно');
    }

// задание 2
let c = 8;
if (c > 0 && c < 10) {
    console.log('Верно');
}
else {
    console.log('Неверно');
}

c = 0; // неверно
if (c > 0 && c < 10) {
    console.log('Верно');
}
else {
    console.log('Неверно');
}

c = 10; // неверно
if (c > 0 && c < 10) {
    console.log('Верно');
}
else {
    console.log('Неверно');
}

c = -3; // неверно
if (c > 0 && c < 10) {
    console.log('Верно');
}
else {
    console.log('Неверно');
}

c = 2; // верно
if (c > 0 && c < 10) {
    console.log('Верно');
}
else {
    console.log('Неверно');
}

// задание 3
let d = 888;
let e = 3;
if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// задание 4
let a = '2';
let b = '3'; 
alert(a++ + b++);

// задание 5
let monthNumber = prompt('Введите месяц');

switch (monthNumber) {
    case '12':
    case '1':
    case '2':
        console.log('Зима');  
        break;
    case '3':
    case '4':
    case '5':
        console.log('Весна');  
        break;
    case '6':
    case '7':
    case '8':
        console.log('Лето');  
        break;  
    case '9':
    case '10':
    case '11':
        console.log('Осень');  
        break;  
    default:
        console.log('Такого месяца не существует!');
        break;
}

// дополнительные
// задание 7 
let num = prompt('Пожалуйста, введите любое число');

let x = Number(num);
console.log(x);
    
if (num % 2 === 0) {
    alert('Число четное');
} else {
    alert('Число нечетное');
}

// задание 8
let clientOS = prompt('Какую версию операционной системы Вы используете?');

clientOS=clientOS.toLocaleLowerCase();

if (clientOS === 'iOS') {
    alert('Установите версию приложения для iOS по ссылке');
} else {
    alert('Установите версию приложения для Android по ссылке');
}

// задание 9

