// задание 2 Создайте функцию, которая в качестве параметров принимает массив строк и строку. Возвращать данная функция должна новый массив, содержащий 
//только те элементы переданного массива, которые начинаются с переданной строки. Регистр символов не должен влиять.



function searchStart(arr, letter) {
    arr = [];
    return;
        
    }

searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'); // ['кошка', 'комар']
searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'); // ['груша']
searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'); // []



/* Реализуйте функцию filter, которая должна работать аналогично методу массива `filter. За основу возьмите функцию 
map, которую мы реализовывали на уроке Чтобы из функции map сделать filter, нужно, в зависимости от результата вызова 
ruleFunction, принимать решение о том, добавлять в результирующий массив очередной элемент или нет.
Возьмите за основу код ниже. Задание считается выполненным, если два console.logв коде выводят правильное значение:*/

function isPositive(nums) {
    return nums > 0;
  }

  function isMale(gender) {
      return gender;
  }

  function filter(arr, ruleFunction) {
    const arrFunction = [];

  for (let i = 0; i< arr.length; i++) {
      
        if (ruleFunction(arr[i].gender)) {
          arrFunction.push(arr[i]);
            return people1;
      }
    
     else if (ruleFunction(arr[i])) {
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
