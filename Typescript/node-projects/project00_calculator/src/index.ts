#! /usr/bin/env node

import inquirer from "inquirer";

let another = "yes";

while (another !== "no") {
  const whatToCalculate = await inquirer.prompt({
    type: "list",
    name: "whatToCalculate",
    message: "What do you want to calculate?",
    choices: ["BMI (Body Mass Index)", "Arithmatic Calculator"],
  });

  if (whatToCalculate.whatToCalculate === "BMI (Body Mass Index)") {
    // BMI Calculator

    const weightAndHeight = await inquirer.prompt([
      {
        type: "number",
        name: "weight",
        message: "Enter your weight in kg",
      },
      {
        type: "number",
        name: "height",
        message: "Enter your height in m",
      },
    ]);

    // Calculate BMI
    const bmi =
      weightAndHeight.weight /
      (weightAndHeight.height * weightAndHeight.height);

    // Display BMI
    console.log(`Your BMI is ${bmi}`);
  } else {
    // Arithmatic Calculator

    const operation = await inquirer.prompt({
      name: "operation",
      type: "list",
      message: "What operation do you want to perform?",
      choices: ["Add", "Subtract", "Multiply", "Divide", "Modulus", "Exponent"],
    });

    // Get User's Numbers
    const numbers = await inquirer.prompt([
      {
        type: "number",
        name: "firstNumber",
        message: "Enter first number",
      },
      {
        type: "number",
        name: "secondNumber",
        message: "Enter second number",
      },
    ]);

    let result;

    switch (operation.operation) {
      case "Add":
        result = numbers.firstNumber + numbers.secondNumber;
        break;
      case "Subtract":
        result = numbers.firstNumber - numbers.secondNumber;
        break;
      case "Multiply":
        result = numbers.firstNumber * numbers.secondNumber;
        break;
      case "Divide":
        result = numbers.firstNumber / numbers.secondNumber;
        break;
      case "Modulus":
        result = numbers.firstNumber % numbers.secondNumber;
        break;
      case "Exponent":
        result = numbers.firstNumber ** numbers.secondNumber;
        break;
    }
    console.log(`The result is ${result}`);
  }
  const a = await inquirer.prompt({
    type: "list",
    name: "another",
    choices: ["yes", "no"],
    message: "Do you want to calculate another? (yes/no)",
  });
  another = a.another;
}

console.log("Goodbye!");
