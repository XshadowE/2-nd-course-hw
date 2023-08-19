// game 1

function Season() {
    let month = Number(prompt('Номер месяца'));
    if (isNaN(month)) {
      alert('введите число!!!');
    } else if (month >= 3 && month <= 5) {
       return alert('Весна');
    } else if (month >= 6 && month <= 8) {
          return alert('Лето');
        } else if (month >= 9 && month <= 11) {
               return alert('Осень');
            } else if (month = 12 || month <= 2) {
                   return alert('Зима');
                } else {
                   return alert('Такого месяца не существует');
                }
}            

// game 2

function Fruits () {  
   let list = ['Яблоко',  'Груша',  'Дыня',  'Виноград',  'Персик',  'Апельсин',  'Мандарин'];
   list = list.sort(() => Math.random() - 0.5);
   alert(list);
   let result = prompt('Чему равнялся первый элемент массива?');
   let result2 = prompt('Чему равнялся последний элемент массива?');
   if (result === list [0] || result2 === list [6]) {
      alert('«Вы были близки к победе!»');
   } else if (result === list [0] && result2 === list [6]){
      alert('Поздравляем, Вы выиграли!!!');
   } else {
      alert ('Вы ответили неверно');
   }
} 


    
