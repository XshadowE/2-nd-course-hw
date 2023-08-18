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
    return Math.round(Math.random() * (maxValue - minValue)) + minValue;
}
console.log(getRandomInt (1, 10));

// задание 6

let getRandomArrNumbers = [];
    for (let f = 0; f < 7; f++){
        getRandomArrNumbers[f] = Math.round(Math.random() *7); 
        getRandomArrNumbers = getRandomArrNumbers.slice(0, 3);
    }
    console.log(getRandomArrNumbers);

let getRandomArrNumbers2 = [];
    for (let i = 0; i < 12; i++){
        getRandomArrNumbers2[i] = Math.round(Math.random() *12); 
        getRandomArrNumbers2.length = 6;
    }
    console.log(getRandomArrNumbers2);

// задание 7

let randomNumber = getRandomInt(0, 5);
console.log(randomNumber);

// задание 8

let currentDate = new Date();
console.log(currentDate);

// задание 9

let currentDate2 = new Date();
currentDate2.setDate(73);
console.log(currentDate2);

// задание 10

const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь","Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

let currentDate3 = new Date();
let fullDate = "Пятница: " + currentDate3.getDate() + " " + months[currentDate3.getMonth()] + " " + currentDate3.getFullYear() + ", " + days[currentDate3.getDay()];

console.log(fullDate);
