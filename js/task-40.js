//  40  B3

// Доповни метод updatePotionName(oldName, newName) таким чином,
//   щоб він оновлював назву зілля з oldName на newName
// в масиві зілля у властивості potions.

const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  updatePotionName(oldName, newName) {
    // Change code below this line
  this.potions.splice(this.potions.indexOf(oldName), 1, newName);
      // this.books.splice(this.books.indexOf(oldName), 1, newName);

    // Change code above this line
  },
};