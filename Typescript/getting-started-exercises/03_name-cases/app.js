"use strict";
const a = "aBduL KaRIm";
const lowerCased = a.toLowerCase();
const upperCased = a.toUpperCase();
const titleCase = a
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
console.log(lowerCased);
console.log(upperCased);
console.log(titleCase);
