// задание 1
let i = 1;

while (i < 3) {
console.log('Привет');
i++;
}

// задание 2
let a = 1;
do {
    console.log(a);
    a++;
} while (a < 6);

// задание 3
a = 7;
do {
    console.log(a);
    a++;
} while (a < 23);

// задание 4
const salaries = {'Коля': 200, 'Вася':300, 'Петя':400
}
for (let key in salaries) {
    let salary = salaries[key] + '$';
    console.log(`${key}- зарплата ${salary}`);
}

// задание 5
let n = 1000;
let num = 0;

while (n >= 50) {
    n= n/2;
    num++;
    console.log('итераций:' + num + 'число' + n); // 5 итераций
}

// задание 6 
for (let day = 5; day <= 31; day++) {
    day = day+7;
    console.log(`Сегодня пятница ${day} число, необходимо подготовить отчет`);
}


