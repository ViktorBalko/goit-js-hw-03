// 34  B3

  // Додай об'єкту bookShelf ще два методи, 
  // які поки що будуть повертати просто рядки
  // за аналогією з getBooks() і addBook(bookName).

  // Метод removeBook(bookName) буде видаляти книгу
  // за назвою.Повертає рядок "Deleting book <назва книги>",
  //   де < назва книги > - це значення параметра bookName.

  // Метод updateBook(oldName, newName) буде оновлювати
  // назву книги на нову.
  // Повертає рядок "Updating book <стара назва> to <нова назва>",
  //   де < стара назва > і < нова назва > - це значення параметрів oldName і
  // newName відповідно.

  const bookShelf = {
  // Change code below this line
  books: ["The last kingdom", "The guardian of dreams"],
  getBooks() {
    return "Returning all books";
  },
  addBook(bookName) {
    return `Adding book ${bookName}`;
  },
  removeBook(bookName) {
    return `Deleting book ${bookName}`;
  },
  updateBook(oldName, newName) {
    return `Updating book ${oldName} to ${newName}`;
  },
  
  // Change code above this line
};