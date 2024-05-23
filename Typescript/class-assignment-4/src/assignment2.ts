// Assignment 2: Manipulating an Array: Rearranging Words
// Objective:
// Rearrange an array using array methods to form the sentence "I am a student of GIAIC".
// Steps:

// 1. Scrambled Array:
// o Start with an array of elements in a scrambled order, like:
// const scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"];

const scrambledArray = ["student", "of", true, "am", "a", "GIAIC", "I"];

// •  Modify the Array:
// • Use methods like split(), join(), push(), pop(), shift(), and unshift() to:
// o Convert non-strings (booleans, numbers) to strings if needed.
// o Split elements into character arrays (optional).
// o Rearrange characters or elements in the desired order (modify original array or
// create temporary arrays).

const scrambledArrayString = scrambledArray.map((element) => {
  return element.toString();
});

for (const word of scrambledArrayString) {
  if (word === "true" || word === "123") {
    scrambledArrayString.splice(scrambledArrayString.indexOf(word), 1);
  }
}

scrambledArrayString.sort();

const firstWord = scrambledArrayString.shift()!;
scrambledArrayString.push(firstWord);

const a = scrambledArrayString[3];
const b = scrambledArrayString[4];

scrambledArrayString[3] = b;
scrambledArrayString[4] = a;

const c = scrambledArrayString[1];
const d = scrambledArrayString[2];

scrambledArrayString[1] = d;
scrambledArrayString[2] = c;

// •  Output the Result:
// • Use join() to combine elements back into a single string: "I am a student of GIAIC".

const finalString = scrambledArrayString.join(" ");
console.log(finalString + ".");
