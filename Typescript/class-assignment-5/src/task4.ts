// 4.Exploring Objects with for...in Loop
// Objective: Practice working with objects in TypeScript and iterating over their properties using
// a for...in loop.

// Instructions:

// 1. Create a simple object with three items:
// o Define an object called myObject with three properties: item1, item2, and item3,
// each with corresponding string values.

const myObject: any = {
  item1: "apple",
  item2: "banana",
  item3: "cherry",
};

// 2. Use a for...in loop to get properties' names and values from the object:
// o Iterate through the properties of myObject using a for...in loop.
// o Inside the loop, print each property's name and its corresponding value to the
// console.

for (const key in myObject) {
  const element = myObject[key];
  console.log(`${key}: ${element}`);
}
