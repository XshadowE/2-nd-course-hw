// задание 1

let str = 'js'.toLocaleUpperCase();

console.log(str);

// задание 2 Создайте функцию, которая в качестве параметров принимает массив строк и строку. Возвращать данная функция должна новый массив, содержащий 
//только те элементы переданного массива, которые начинаются с переданной строки. Регистр символов не должен влиять.



function searchStart(arr, letter) {
    arr = [];
    return;
        
    }

searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'); // ['кошка', 'комар']
searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'); // ['груша']
searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'); // []


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


 function getRandomArrNumbers (nums){
    return Array.from(Array(nums / 2), () => Math.floor(Math.random() * nums));
   }
   getRandomArrNumbers(7);
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
