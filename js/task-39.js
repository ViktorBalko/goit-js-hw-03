//  39  B3

// Доповни метод removePotion(potionName) таким чином,
//   щоб він видаляв зілля potionName з масиву зілля у властивості potions.

const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  removePotion(potionName) {
    // Change code below this line
   // this.potions.pop();
    
  this.potions.splice(this.potions.indexOf(potionName), 1);
  // this.potions.splice(atTheOldToad.potions.indexOf(potionName), 1);


    // Change code above this line
  },
};