// задание 1

let str = 'js'.toLocaleUpperCase();

console.log(str);

// задание 2

const animals = ['Кошка', 'Кит', 'Комар', 'Носорог'];
const search = 'ко';

animals.forEach((animals) => {
    if (animals.toLowerCase().includes(search.toLowerCase())) {
        console.log(animals);// ['кошка', 'комар']
    }
});

const food = ['яблоко', 'груша', 'гриб', 'огурец'];
const search1 = 'гру';

food.forEach((food) => {
    if (food.toLowerCase().includes(search1.toLowerCase())) {
        console.log(food);// ['груша']
    }
});

const buildings = ['Дом', 'Банк', 'Больница', 'Театр'];
const search2 = 'Кино';

buildings.forEach((buildings) => {
    if (buildings.toLowerCase().includes(search2.toLowerCase())) {
        console.log(buildings);// []
    }
});

// задание 3

const num = 32.58884;
console.log(Math.floor(num)); // 32
console.log(Math.ceil(num)); // 33
console.log(Math.round(num)); // 33

// задание 4


console.log(Math.max(52, 53, 49, 77, 21, 32)); 
console.log(Math.min(52, 53, 49, 77, 21, 32));

//let numsArray = [52, 53, 49, 77, 21, 32];
//let max = Math.max(...numsArray);
//console.log(max);
//let min = Math.min(...numsArray);
//console.log(min);

// задание 5

function getRandomInt(minValue, maxValue) {
    return Math.floor(Math.random() * (maxValue - minValue) + 1) + minValue;
}
console.log(getRandomInt (1, 10));

// задание 6


 function getRandomArrNumbers (length){
 const numbers = [...Array(length)];
   for (let i = 0; i < numbers.length; i += 1) {
   numbers[i] = Math.floor(Math.random());
   return numbers;
   }
   }
   getRandomArrNumbers(12);
 
     
    

// задание 7

let randomNumber = getRandomInt(0, 5);
console.log(randomNumber);

// задание 8

let currentDate = new Date();
console.log(currentDate);

// задание 9

let myDate = new Date();
myDate.setDate(myDate.getDate() + 73);

console.log(myDate);

// задание 10

const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];

let currentDate3 = new Date();
let fullDate = "Пятница: " + currentDate3.getDate() + " " + months[currentDate3.getMonth()] + " " + currentDate3.getFullYear() + ", " + days[currentDate3.getDay()];

console.log(fullDate);
