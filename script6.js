// задание 1

const numbers = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < numbers.length; i++){
    if (numbers[i] === 10) break;
console.log(numbers[i]);
}

// задание 2

const nums = [1, 5, 4, 10, 0, 3];
let search = nums.includes (4);
console.log(search);

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
num.push([2, 2, 2])
console.log(num);

// задание 6

let enumeration = [9, 8, 7, 'a', 6, 5];
enumeration = enumeration.sort();
console.log(enumeration);
console.log(enumeration.pop());
console.log(enumeration);

// задание 7
const x = [9, 8, 7, 6, 5];
let userNum = prompt('Угадайте число');

// задание 8 
const str = 'abcdef'; 
const reverse = str.split('').reverse().join(''); 
console.log(reverse);

// задание 9

const array = [
   array1 =  [1, 2, 3,],
   array2 = [4, 5, 6],
];
const all = [...array1, ...array2];
console.log(all);

// задание 10 

const max = 10;
const get = 

const result = z.reduce((intermediate, value) => intermediate + value);
console.log(result);
