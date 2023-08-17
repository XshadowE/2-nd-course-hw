// задание 1

const numbers = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < numbers.length; i++){
    if (numbers[i] === 11) break;
console.log(numbers[i]);
}

// задание 2


const nums = [1, 5, 4, 10, 0, 3];
console.log(nums.indexOf(4));



// задание 3

let greetings = [1, 3, 5, 10, 20];
greetings = greetings.join (' ');
console.log(greetings);

// задание 4

let arr = [];
for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 0; j < 3; j++) {
		arr[i].push(1);
	}
}
console.log(arr);

// задание 5

let num = [1, 1, 1];
num.push(2, 2, 2)
console.log(num);

// задание 6

let enumeration = [9, 8, 7, 'a', 6, 5];
enumeration = enumeration.sort();
console.log(enumeration);
console.log(enumeration.pop());
console.log(enumeration);

// задание 7

let numb = [9, 8, 7, 6, 5];
let result1 = numb.includes(Number(prompt('Введите число'))) ? 'Угадал' : 'Не угадал';
alert(result1);


// задание 8 
const str = 'abcdef'; 
const reverse = str.split('').reverse().join(''); 
console.log(reverse);

// задание 9

let mean = [[1, 2, 3,],[4, 5, 6]];
let all = [].concat(...mean);

console.log(all);

// задание 10 

const get = [3, 4, 8, 9, 1];
for (f = 0; f < get.length -1; f++) {
console.log(get[f] + get[f + 1]);
} 

// задание 11

const typeNumber = [4, 6, 10, 12];
let result = typeNumber.map (item => (item**2));
console.log(result);

// задание 12

const getLengthWords = source => source.map (str => str.length);
console.log(getLengthWords (['слово', '', 'слог', 'длинное предложение', 'буква']));

// задание 13

function filterPositive(array) {
	const result = array.filter(array => array < 0);
	console.log(result);
  }
  
  filterPositive([-1, 0, 5, -10, 56]); // => [-1, -10]
  filterPositive([-25, 25, 0, -1000, -2]); // => [-25, -1000, -2]

// дополнительно задание 14

let mass1 = [];
for (let t = 0; t < 10; t++) {
mass1[t] = Math.floor(Math.random() *11);
}
let mass2 = mass1.filter(num => num % 2 === 0);

console.log(mass1);
console.log(mass2);

// задание 15

let mas1 = [];
for (let f = 0; f < 6; f++) {
	mas1[f] = Math.round(Math.random() *10);
}
let mas2 = mas1.reduce((a, b) => a + b) / mas1.length;

console.log(mas1);
console.log(mas2);