// 19 B3

// Задание
// Напиши функцию getAllPropValues(propName)
// которая принимает один параметр propName - имя(ключ) свойства.
// Функция должна вернуть массив всех значений свойства с таким именем
// из каждого объекта в массиве products.Если в объектах нет свойства с таким именем,
//   функция должна вернуть пустой массив.

// Тесты
// Объявлена функция getAllPropValues(propName)
// Вызов getAllPropValues("name") возвращает ["Radar", "Scanner", "Droid", "Grip"]
// Вызов getAllPropValues("quantity") возвращает [4, 3, 7, 9]
// Вызов getAllPropValues("price") возвращает [1300, 2700, 400, 1200]
// Вызов getAllPropValues("category") возвращает []

const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];


 function getAllPropValues(propName) {

  let arrValue = [];

  for (const product of products) {

    for (const obj in product) {
      if (obj === propName) {
        arrValue.push(product[obj]);
      };
    };
  };
 
    return arrValue;
}

  // ======= OR ======== //

function getAllPropValues(propName) {
  // Change code below this line
  const arrName = [];
  for (const product of products) {
    if (Object.keys(products[0]).includes(propName)) {
      arrName.push(product[propName]);
    }
  }
  return arrName;
};




 