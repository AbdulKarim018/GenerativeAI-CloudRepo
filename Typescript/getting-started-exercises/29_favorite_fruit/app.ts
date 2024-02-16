const favorite_fruits = ["mango", "apple", "banana"];

function checkFruit(fruit: string) {
  if (favorite_fruits.includes(fruit)) console.log(`You really like ${fruit}!`);
}

checkFruit("mango");
checkFruit("banana");
checkFruit("grapes");
checkFruit("peach");
