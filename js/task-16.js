//  16 B3

// Задание
// Напиши функцию countTotalSalary(salaries)
// которая принимает объект зарплат, где
// имя свойства это имя сотрудника,
//   а значение свойства это зарплата.
// Функция должна рассчитать общую сумму
// зарплат сотрудников и вернуть её.
// Используй переменную totalSalary для
// хранения общей суммы зарплаты.

// Тесты
// Объявлена функция countTotalSalary(salaries)
// Вызов countTotalSalary({}) возвращает 0
// Вызов countTotalSalary({ mango: 100, poly: 150, alfred: 80 }) возвращает 330
// Вызов countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }) возвращает 400
// Функция учитывает только собственные свойства объекта

function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Change code below this line
  const allSalaries = Object.values(salaries);
for (let values of allSalaries) {

   totalSalary += values;
}
  
  // Change code above this line
  return totalSalary;
}

/// or -->

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line

//   const arrSalaries = Object.values(salaries);
//   for (salary of arrSalaries){
//      totalSalary += salary;
//   }
  
//   // Change code above this line
//   return totalSalary;
// }