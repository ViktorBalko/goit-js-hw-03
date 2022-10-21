//  14 B3
//Виконай рефакторинг функції countProps(object), використовуючи метод Object.keys() і, можливо, але не обов'язково, цикл for...of.

function countProps(object) {
  // Change code below this line
 // let countProps = 0;
//  for (let key of object) {
  return Object.keys(object).length;
//  }
  // Change code above this line
}
