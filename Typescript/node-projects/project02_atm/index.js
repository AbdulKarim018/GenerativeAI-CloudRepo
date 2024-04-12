#! /usr/bin/env node
import inquirer from "inquirer";
import figlet from "figlet";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import { createSpinner } from "nanospinner";
const { clear } = console;
const { log } = console;
function delay(ms = 2000) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const validUserAccounts = [
    {
        userId: "1234",
        name: "AbdulKarim",
        pin: "1111",
        balance: getRandomInt(100, 1000),
    },
    {
        userId: "5678",
        name: "John Doe",
        pin: "2222",
        balance: getRandomInt(1000, 10000),
    },
    {
        userId: "9012",
        name: "Jane Doe",
        pin: "3333",
        balance: getRandomInt(15000, 1000000),
    },
];
async function sayHello() {
    const welcomeText = figlet.textSync("Welcome to the ATM", {
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
    log(chalk.yellow("Thank You for using the ATM!"));
    process.exit(0);
}
async function showSpinner({ spinnerText, spinnerErrorText, spinnerSuccessText, spinnerDuration, }) {
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
async function getUserId() {
    const answers = await inquirer.prompt({
        type: "input",
        name: "userId",
        message: "Enter your user ID:",
    });
    return answers.userId;
}
async function getUserPin() {
    const answers = await inquirer.prompt({
        type: "input",
        name: "pin",
        message: "Enter your PIN:",
    });
    return answers.pin;
}
async function mainMenu() {
    const answers = await inquirer.prompt({
        type: "list",
        name: "menu",
        message: "What would you like to do?",
        choices: ["Log into Account", "Exit"],
    });
    return answers.menu;
}
async function accountMenu() {
    const answers = await inquirer.prompt({
        type: "list",
        name: "menu",
        message: "What would you like to do?",
        choices: ["Check Balance", "Deposit", "Withdraw", "Log Out"],
    });
    return answers.menu;
}
function loginMessage(userAccount) {
    log(chalk.green(`Welcome, ${userAccount.name}!`));
}
let exit = false;
async function main() {
    let hasWelcomeMessageShown = false;
    while (!exit) {
        clear();
        if (!hasWelcomeMessageShown) {
            await sayHello();
            await showSpinner({
                spinnerText: "Please wait while we setup the ATM...",
                spinnerSuccessText: "Setup Complete!",
                spinnerDuration: 2000,
            });
            hasWelcomeMessageShown = true;
        }
        const menuChoice = await mainMenu();
        if (menuChoice === "Exit") {
            exit = true;
            break;
        }
        clear();
        const userId = await getUserId();
        const userAccount = validUserAccounts.find((account) => account.userId === userId);
        if (!userAccount) {
            await showSpinner({
                spinnerText: "Finding your account...",
                spinnerErrorText: "Account Not found!",
            });
            await delay(1500);
            continue;
        }
        await showSpinner({
            spinnerText: "Finding your account...",
            spinnerSuccessText: "Account found!",
        });
        const userPin = await getUserPin();
        if (userPin !== userAccount.pin) {
            await showSpinner({
                spinnerText: "Checking your PIN...",
                spinnerErrorText: "Incorrect PIN!",
            });
            await delay(1500);
            continue;
        }
        await showSpinner({
            spinnerText: "Checking your PIN...",
            spinnerSuccessText: "PIN Correct!",
        });
        await showSpinner({
            spinnerText: "Logging in...",
            spinnerSuccessText: "Logged in!",
        });
        clear();
        let exitAccount = false;
        while (!exitAccount) {
            loginMessage(userAccount);
            const accountMenuChoice = await accountMenu();
            switch (accountMenuChoice) {
                case "Check Balance":
                    clear();
                    log(chalk.green(`Your balance is $${userAccount.balance}`));
                    continue;
                case "Deposit":
                    const depositAmount = await inquirer.prompt({
                        type: "input",
                        name: "amount",
                        message: "Enter the amount you would like to deposit:",
                    });
                    userAccount.balance += parseInt(depositAmount.amount, 10);
                    await showSpinner({
                        spinnerText: "Depositing...",
                        spinnerSuccessText: "Deposit Complete!",
                    });
                    clear();
                    log(chalk.green(`Your new balance is $${userAccount.balance}`));
                    continue;
                case "Withdraw":
                    const withdrawAmount = await inquirer.prompt({
                        type: "input",
                        name: "amount",
                        message: "Enter the amount you would like to withdraw:",
                    });
                    if (parseInt(withdrawAmount.amount, 10) > userAccount.balance) {
                        await showSpinner({
                            spinnerText: "Withdrawing...",
                            spinnerErrorText: "Insufficient Funds!",
                        });
                        continue;
                    }
                    userAccount.balance -= parseInt(withdrawAmount.amount, 10);
                    await showSpinner({
                        spinnerText: "Withdrawing...",
                        spinnerSuccessText: "Withdraw Complete!",
                    });
                    clear();
                    log(chalk.green(`Your new balance is $${userAccount.balance}`));
                    continue;
                case "Log Out":
                    await showSpinner({
                        spinnerText: "Logging out...",
                        spinnerSuccessText: "Logged out!",
                    });
                    break;
                default:
                    break;
            }
            break;
        }
    }
    sayGoodbye();
}
main();
