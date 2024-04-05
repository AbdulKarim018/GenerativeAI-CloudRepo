#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import { createSpinner } from "nanospinner";
const clear = console.clear;
const log = console.log;
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
clear();
async function showHeading() {
    const headingText = figlet.textSync("Number Guessing Game");
    const heading = chalkAnimation.rainbow(headingText);
    await sleep();
    heading.stop();
    log(chalk.gray("by Abdul Karim\n"));
}
async function showLoading() {
    const spinner = createSpinner("Loading...").start();
    await sleep(1000);
    spinner.success({
        text: "Loading Complete!",
    });
}
async function showGoodbye() {
    const goodbyeText = figlet.textSync("Goodbye");
    const googbye = chalkAnimation.radar(goodbyeText, 3);
    await sleep(1700);
    googbye.stop();
    clear();
    log(goodbyeText);
    log(chalk.yellow("Thank you for playing the game!"));
    process.exit(0);
}
const game = async () => {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    let chances = 3;
    const playAgain = true;
    while (playAgain === true && chances > 0) {
        const answer = await inquirer.prompt([
            {
                type: "input",
                name: "number",
                message: `Guess the correct number between 0 to 10: (${chances}/3 chances left)`,
            },
        ]);
        const guess = +answer.number;
        if (guess === randomNumber) {
            log(chalk.green("Congratulations! You guessed the number correctly"));
            break;
        }
        else {
            chances--;
            if (chances === 0) {
                // clear();
                log(chalk.red(`Sorry! You lost the game. The number was ${randomNumber}`));
                break;
            }
            else {
                // clear();
                log(chalk.red(`Wrong! Try again.`));
            }
        }
    }
    const playAgainAnswer = await inquirer.prompt([
        {
            type: "confirm",
            name: "playAgain",
            message: "Do you want to play again?",
        },
    ]);
    if (playAgainAnswer.playAgain === true) {
        clear();
        game();
    }
    else {
        clear();
        await showGoodbye();
    }
};
async function start() {
    await showHeading();
    await showLoading();
    log(chalk.yellow("Welcome to Number Guessing Game"));
    await sleep(500);
    log(chalk.yellow("You have 3 chances to guess the number between 0 to 10"));
    await sleep(500);
    log(chalk.yellow("Let's start the game..."));
    await sleep(3000);
    clear();
    game();
}
start();
