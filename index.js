#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let conversion = {
    "PKR": {
        "USD": 0.0036,
        "GBP": 0.0028,
        "PKR": 1
    },
    // In GBP 
    "GBP": {
        "USD": 1.26,
        "PKR": 352.03,
        "GBP": 1
    },
    // In DOLLARS
    "USD": {
        "PKR": 278.31,
        "GBP": 0.79,
        "USD": 1
    }
};
// Step 2: Using Inquirer
const answer = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: "Select your currency...",
        choices: ["PKR", "USD", "GBP"]
    },
    {
        name: "to",
        type: "list",
        choices: ["PKR", "USD", "GBP"],
        message: "Select your conversion currency"
    },
    // conversion amount
    {
        name: "amount",
        type: "number",
        message: "Enter your conversion amount"
    }
]);
// step 3: output
const { from, to, amount } = answer;
// check input in given programs
if (from && to && amount) {
    // formula
    let result = conversion[from][to] * amount;
    console.log(chalk.bgWhiteBright(`Your conversion from ${from} to ${to} is: ${result}`));
}
else {
    // generate error
    console.log("invalid input");
}
