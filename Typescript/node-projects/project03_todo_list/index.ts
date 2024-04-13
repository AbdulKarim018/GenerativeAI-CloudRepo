#! /usr/bin/env node
import inquirer from "inquirer";
import figlet from "figlet";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import { createSpinner } from "nanospinner";

const { clear } = console;
const { log } = console;
function delay(ms: number = 2000) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

type ShowSpinnerOptions = {
  spinnerText: string;
  spinnerDuration?: number;
  spinnerSuccessText?: string;
  spinnerErrorText?: string;
};
async function showSpinner({
  spinnerText,
  spinnerDuration,
  spinnerSuccessText,
  spinnerErrorText,
}: ShowSpinnerOptions) {
  const spinner = createSpinner(spinnerText);
  spinner.start();
  await delay(spinnerDuration || 1000);
  if (spinnerErrorText) {
    spinner.error({
      text: spinnerErrorText,
    });
  }
  if (spinnerSuccessText) {
    spinner.success({
      text: spinnerSuccessText,
    });
  }
}

async function sayHello() {
  const welcomeText = figlet.textSync("Welcome to the ToDo List!", {
    font: "Standard",
  });
  chalkAnimation.rainbow(welcomeText);
  await delay();
  console.log(chalk.gray.underline("By AbdulKarim"));
}

async function sayGoodbye() {
  clear();
  const goodbyeText = figlet.textSync("Goodbye!");
  const goodbye = chalkAnimation.radar(goodbyeText, 3);
  await delay(1500);
  goodbye.stop();
  clear();
  log(goodbyeText);
  // log(chalk.yellow("Thank You for using the ToDo app!"));
  process.exit(0);
}

let exit = false;
let isWelcomeMessageDisplayed = false;
const todos: string[] = [];
async function main() {
  clear();

  if (!isWelcomeMessageDisplayed) {
    await sayHello();
    await showSpinner({
      spinnerText: "Setting up the app...",
      spinnerDuration: 2000,
      spinnerSuccessText: "Setup Complete!",
    });
    isWelcomeMessageDisplayed = true;
  }

  while (!exit) {
    // if (isWelcomeMessageDisplayed) clear();
    const { action } = await inquirer.prompt([
      {
        type: "list",
        name: "action",
        message: "What would you like to do?",
        choices: [
          { name: "Add a new todo", value: "add" },
          { name: "View all todos", value: "view" },
          { name: "Exit", value: "exit" },
        ],
      },
    ]);
    switch (action) {
      case "add": {
        clear();
        const { todo } = await inquirer.prompt([
          {
            type: "input",
            name: "todo",
            message: "Enter the todo: ",
          },
        ]);
        todos.push(todo);
        log(chalk.green("Todo added successfully!"));
        break;
      }
      case "view": {
        clear();
        if (todos.length === 0) {
          console.log(chalk.yellow("You have no todos!"));
          await inquirer.prompt([
            {
              type: "input",
              name: "dummy",
              message: "Press Enter to go back",
            },
          ]);
          break;
        }
        console.log(chalk.yellow("Your Todos:"));
        todos.forEach((todo, index) => {
          console.log(`${index + 1}. ${todo}`);
        });
        await inquirer.prompt([
          {
            type: "input",
            name: "dummy",
            message: "Press Enter to go back",
          },
        ]);
        break;
      }
      case "exit": {
        exit = true;
        break;
      }
    }
  }
  await sayGoodbye();
}

main();
