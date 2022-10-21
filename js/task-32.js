// Операція ... (rest) також дозволяє зібрати в масив тільки ту
// частину аргументів, яка необхідна, оголосивши параметри
// до «збирання».

// Функція addOverNum() рахує суму всіх аргументів.
// Зміни параметри і тіло функції addOverNum() таким чином,
//   щоб вона рахувала суму тільки тих аргументів, які більші за
// задане число.Це число повинно бути першим параметром
// функції.

// Change code below this line
function addOverNum(...args) {
    let totalSum = 0;
    let argEtalon = args[0];
    let argsLength = args.length;
  for (let i = 1; i <= argsLength; i += 1) {
    if(args[i] > argEtalon) {
      totalSum += args[i];
    }
  }
return totalSum;
  // Change code above this line
}
