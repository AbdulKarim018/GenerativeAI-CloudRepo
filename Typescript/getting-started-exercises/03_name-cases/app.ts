// Program to display the conversion of cases in Typescript

const a = "aBduL KaRIm";

const lowerCased = a.toLowerCase(); // convert all letters to Lowercase
const upperCased = a.toUpperCase(); // convert all letters to Uppercase
const titleCase = a
  .split(" ")
  .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
  .join(" "); // convert given text to Title Case

console.log(lowerCased);
console.log(upperCased);
console.log(titleCase);
