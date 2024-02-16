const basicIngredients = [
  "lettuce",
  "tomato",
  "onion",
  "cheese",
  "mayonnaise",
  "mustard",
  "pickles",
];
const proteinOptions = [
  "ham",
  "turkey",
  "roast beef",
  "chicken breast",
  "bacon",
  "salami",
  "tuna",
];
const additionalToppings = [
  "avocado",
  "bell peppers",
  "cucumber",
  "sprouts",
  "olives",
  "jalapenos",
  "spinach",
];

function make_sandwich(items: string[]) {
  console.log("Make a Sandwich with the following items: ", items.join(", "));
}

make_sandwich(basicIngredients);
make_sandwich(proteinOptions);
make_sandwich(additionalToppings);
