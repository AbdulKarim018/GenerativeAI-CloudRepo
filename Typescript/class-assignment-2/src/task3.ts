// 3.Friend checker game:
// • Prompt the user to enter a name.
// • Use a switch statement to check if the entered name is a known friend.
// • Output a confirmation message if the name is known, otherwise output a default
// response.

import inquirer from "inquirer";

const friends = ["Taha", "Usman", "Muzammil", "Mujtaba", "Shayan"];

const { userInput } = await inquirer.prompt({
  message: "Enter friend name to check:",
  name: "userInput",
  type: "input",
});

for (const friend of friends) {
  if (friend.toLowerCase() === String(userInput).trim().toLowerCase()) {
    console.log(`${userInput} is a friend!`);
    process.exit(0);
  }
}
console.log(`${userInput} is not a friend!`);
