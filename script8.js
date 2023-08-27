

// задание 1

const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];
 people.sort((a, b) => a.age - b.age);
 
 console.log(people.sort());

 // задание 2

 function isPositive(filter) {
      if (filter > 0)
      return true;
    }

    function isMale(filter) {
        if (filter.gender === 'male')
        return true;
    }

    function filter(arr, ruleFunction) {
      const arrFunction = [];

    for (let i = 0; i< arr.length; i++) {
      if (ruleFunction (arr[i])) {
      arrFunction.push(arr[i]);
      }
    }
    return arrFunction;
  }
    console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]

    const people1 = [
       {name: 'Глеб', gender: 'male'},
       {name: 'Анна', gender: 'female'},
       {name: 'Олег', gender: 'male'},
       {name: 'Оксана', gender: 'female'}
    ];
    
    console.log(filter(people1, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]

    // задание 3

     const currentDate = new Date();

     let timerId = setInterval(() =>  console.log(new Date), 3000);
     setTimeout(() => { clearInterval(timerId); console.log('30 секунд прошло');},30000);  
    


    // задание 4

   function delayForSecond(callback) {
     setTimeout (callback, 1000);
  }
   
    delayForSecond(function () {
      console.log('Привет, Глеб!');
    });

    // задание 5 

  function delayForSecond1(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
				if(cb) { 	cb(); }

    }, 1000)
}

  function sayHi (name) {
    console.log(`Привет, ${name}!`);
}
  delayForSecond1(function() {
  sayHi('Глеб')
  });