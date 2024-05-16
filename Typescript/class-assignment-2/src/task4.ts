// 4.Functions:
// • Set up two different variables with different values.
// • Call a function with these variables as arguments and output the result using console.log.
// • Create a second call to the function with two more numbers as arguments.

const num1 = 3;
const num2 = 5;

const printNum = (...nums: number[]) => console.log(...nums);

printNum(num1, num2);

printNum(num1, num2, 8, 11);
