#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgRed("--<Currency Converter>--\n"));
let currency = {
    USD: 1,
    EUR: 0.90,
    AED: 3.65,
    AFN: 70.57,
    INR: 82.90,
    PKR: 280
};
const user_answers = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: "From :",
        choices: ["USD", "EUR", "AED", "AFN", "INR", "PKR"]
    },
    {
        name: "to",
        type: "list",
        message: "To :",
        choices: ["USD", "EUR", "AED", "AFN", "INR", "PKR"]
    },
    {
        name: "amount",
        type: "number",
        message: "Write your Amount :"
    }
]);
let fromAmount = currency[user_answers.from];
let toAmount = currency[user_answers.to];
let amount = user_answers.amount;
let baseAmount = amount / fromAmount;
let convertAmount = baseAmount * toAmount;
let roundAmount = convertAmount.toFixed(2);
if (user_answers.to == "PKR") {
    console.log(`Converted to : ${roundAmount} ${"PKR"}`);
}
else if (user_answers.to == "INR") {
    console.log(`Converted to : ${roundAmount} ${"INR"}`);
}
else if (user_answers.to == "AFN") {
    console.log(`Converted to : ${roundAmount} ${"AFN"}`);
}
else if (user_answers.to == "AED") {
    console.log(`Converted to : ${roundAmount} ${"AED"}`);
}
else if (user_answers.to == "EUR") {
    console.log(`Converted to : ${roundAmount} ${"EUR"}`);
}
else {
    console.log(`Converted to : ${roundAmount} ${chalk.blue("USD")}`);
}
