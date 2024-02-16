// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
//
// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

const car = "Toyota";
const num = 5;
const arr = [1, 2, 3, 4, 5];

console.log("I predict this will return true");
console.log(car === "Toyota");
console.log("I predict this will return false");
console.log(car !== "Toyota");
console.log("I predict this will return true");
console.log(car.toLowerCase() === "toyota");
console.log("I predict this will return true");
console.log(num === 5);
console.log("I predict this will return false");
console.log(num !== 5);
console.log("I predict this will return false");
console.log(num > 5);
console.log("I predict this will return false");
console.log(num < 5);
console.log("I predict this will return true");
console.log(num >= 5);
console.log("I predict this will return true");
console.log(num <= 5);
console.log("I predict this will return true");
console.log(num === 5 && car === "Toyota");
console.log("I predict this will return true");
console.log(num === 5 || car === "Toyota");
console.log("I predict this will return true");
console.log(arr.includes(5));
console.log("I predict this will return true");
console.log(!arr.includes(6));
console.log("I predict this will return true");
console.log(arr.indexOf(5) !== -1);
console.log("I predict this will return true");
console.log(arr.indexOf(6) === -1);
