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

   let result = prompt('Чему равняется первый элемент массива?');
   let result2 = prompt('Чему равняется последний элемент массива?');

   for (let z = 0; z < list.length; z++) {

   if (result === list [0] || result2 === list [6]) {
      } else if (list[0].toLowerCase().includes(result.toLowerCase()) || list [list.length - 1].toLowerCase().includes(result2.toLowerCase())) {
      alert('«Вы были близки к победе!»');
   } if (result === list [0] && result2 === list [6]) {
      } else if (list[0].toLowerCase().includes(result.toLowerCase()) && list [list.length - 1].toLowerCase().includes(result2.toLowerCase())) {
      alert('Поздравляем, Вы выиграли!!!');
      } else {
         alert ('Вы ответили неверно');
            break;
         }
      } 
   }

    
