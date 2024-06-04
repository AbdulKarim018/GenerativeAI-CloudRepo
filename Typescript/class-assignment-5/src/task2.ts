// 2. Guessing Game (Using while loop )
// Objective: Create a simple number guessing game where the user tries to guess a randomly
// generated number between 1 and a specified maximum value using a predefined set of guesses.
// Steps to Follow:

// 1. Set a maximum value: Create a variable to store the maximum value for the number
// guessing game.

const maxNumber = 10;
const maxTurns = 10;
let turns = 0;

// 2. Generate a random number: Use Math.random() and Math.floor() to generate a
// random number between 1 and the maximum value. Log this value to the console for
// development purposes.

const randomNmber = Math.floor(Math.random() * maxNumber) + 1;
console.log(randomNmber);

// 3. Track the guess status: Create a variable to track whether the user's guess is correct. Set
// it to false initially.

let isAnswerCorrect = false;

// 4. Simulate user guesses: Use an array to store a series of predefined guesses.

const userGuesses = [2, 5, 7, 8, 10];

// 5. Iterate over guesses: Use a while loop to iterate over the predefined guesses until the
// correct guess is made.

while (isAnswerCorrect === false && turns < maxTurns) {
  for (const guess of userGuesses) {
    console.log(randomNmber, guess);
    // 6. Check the user's guess: Inside the loop, check if the current guess matches the random
    // number. Provide feedback if the guess is too high or too low.
    if (guess === randomNmber) {
      isAnswerCorrect = true;
      console.log("Correct guess");
      break;
    } else if (guess > randomNmber) {
      console.log("Too high");
      turns++;
      continue;
    } else if (guess < randomNmber) {
      console.log("Too low");
      turns++;
      continue;
    }
  }
}
