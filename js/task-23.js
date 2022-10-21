// 23 B3

// Задание
// Замени объявления переменных highYesterday, highToday,
//   highTomorrow и highIcon одной операцией деструктуризации
// свойств объекта highTemperatures.Задай значение по умолчанию
// для highIcon - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// Тесты
// Объявлена переменная highTemperatures
// Значение переменной highTemperatures это объект
// Объявлена переменная highYesterday
// Значение переменной highYesterday это число 28
// Объявлена переменная highToday
// Значение переменной highToday это число 26
// Объявлена переменная highTomorrow
// Значение переменной highTomorrow это число 33
// Объявлена переменная highIcon
// Значение переменной highIcon это строка "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
// Используется деструктуризация объекта

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line

//const highYesterday = highTemperatures.yesterday;
//const highToday = highTemperatures.today;
//const highTomorrow = highTemperatures.tomorrow;
//const highIcon = highTemperatures.icon;

const {
yesterday: highYesterday,
  today:highToday,
tomorrow: highTomorrow,
  icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
} = highTemperatures;
// Change code above this line
const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
