"use strict";
// Question no 1
// Write a JavaScript function that accepts a string as a parameter
// and counts the number of vowels within the string.
function countVowels(str) {
    let vowels = ["a", "e", "i", "o", "u"];
    let vowelsCount = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (vowels.includes(char))
            vowelsCount++;
    }
    return `The number of vowels in the given string is ${vowelsCount}.`;
}
console.log(countVowels("This is a string to check for vowels."));
// Question no 2
// Write a JavaScript function that accepts a number as a parameter and checks whether it is prime or not using recursion.
function isPrimeNumber(n) {
    function isPrime(num) {
        if (num === 1 || num === 2) {
            return `${n} is a prime number.`;
        }
        if (n % num === 0) {
            return `${n} is not a prime number.`;
        }
        return isPrime(num - 1);
    }
    return isPrime(n - 1);
}
console.log(isPrimeNumber(0));
console.log(isPrimeNumber(1));
console.log(isPrimeNumber(67));
console.log(isPrimeNumber(71));
console.log(isPrimeNumber(99));
// Question no 3
// Write a JavaScript function to find the first not repeated character.
function getFirstUniqueChar(str) {
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (str.indexOf(char) === str.lastIndexOf(char)) {
            return `${char} is the first unique character in the given string.`;
        }
    }
}
console.log(getFirstUniqueChar("what is the first w unique char in this string"));
// Question no 4
// Write a function that returns the square of a number
function getSquared(num) {
    return num ** 2;
}
console.log(getSquared(5));
console.log(getSquared(10));
console.log(getSquared(15));
console.log(getSquared(20));
// Question no 5
// Function `displayMessage()` prints "Hello World" string using console.log() function.
function displayMessage() {
    console.log("Hello World");
}
displayMessage();
