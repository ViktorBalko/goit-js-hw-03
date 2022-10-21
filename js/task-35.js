// 35  B3

// Доповни метод updateBook(oldName, newName) таким чином,
//   щоб він змінював назву книги з oldName на newName у
// властивості books.
// Використовуй indexOf() для того, щоб знайти потрібний елемент масиву,
//   і splice() для того, щоб замінити цей елемент.


const bookShelf = {
  books: ["The last kingdom", "Haze", "The guardian of dreams"],
  updateBook(oldName, newName) {
    // Change code below this line

    //const bookIndex = this.books.indexOf(oldName);
    //this.books.splice(bookIndex, 1, newName);
      
    this.books.splice(this.books.indexOf(oldName), 1, newName);
  
    // Change code above this line
  },
};