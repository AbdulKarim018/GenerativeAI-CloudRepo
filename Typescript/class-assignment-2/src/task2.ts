// 2.Evaluating a number game:
// • Prompt the user to enter a number.
// • Compare the entered number with a dynamic number value.
// • Output the result indicating whether the entered number is greater than, equal to, or less
// than the dynamic number value.

import inquirer from "inquirer";

let { userNumber } = await inquirer.prompt({
  name: "userNumber",
  type: "number",
  message: "Enter a number:",
});

const randomDynamicNumber = Math.floor(Math.random() * 10);

if (Number.isNaN(userNumber)) {
  console.log("Invalid and/or No Input");
}

if (userNumber > randomDynamicNumber) {
  console.log(
    "The number you entered is greater than the dynamically generated number."
  );
}
if (userNumber < randomDynamicNumber) {
  console.log(
    "The number you entered is less than the dynamically generated number."
  );
}
if (userNumber === randomDynamicNumber) {
  console.log(
    "The number you entered is equal to the dynamically generated number."
  );
}
