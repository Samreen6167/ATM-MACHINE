import inquirer from "inquirer";
let myBaLance = 10000;
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "ENTER YOUR PIN",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("CORRECT PINCODE \n WELCOME TO YOUR ACCOUNT:");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "CHOOSE OPTION",
            type: "list",
            choices: ["WITHDRAW CASH", "CHECKBALANCE", "FASTCASH", "CHANGE PINCODE"]
        }
    ]);
    if (operationAns.operation === "WITHDRAW CASH") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "ENTER YOUR AMOUNT",
                type: "number"
            }
        ]);
        if (myBaLance <= amountAns.amount) {
            console.log(`YOU HAVE ONLY : ${myBaLance} IN YOUR ACCOUNT CANT WITHDRAW THIS AMOUNT`);
        }
        else if (myBaLance >= amountAns.amount,
            myBaLance -= amountAns.amount) {
            console.log(`YOUR REMAINING BALANCE IS:${myBaLance}`);
        }
    }
    else if (operationAns.operation === "CHECKBALANCE") {
        console.log(`YOUR CURRENT BALANCE IS:${myBaLance}`);
    }
    else if (operationAns.operation === "FASTCASH") {
        let cashAns = await inquirer.prompt([
            {
                name: "fastcash",
                message: "CHOOSE AMOUNT",
                type: "list",
                choices: ["1000", "2000", "5000", "10000"]
            }
        ]);
        console.log(`YOU HAVE WITHDRAWN ${cashAns.fastcash}`);
    }
    if (operationAns.operation === "CHANGE PINCODE") {
        let newPin = await inquirer.prompt([
            { name: "myNewPin",
                message: "ENTER YOUR NEW PIN HERE",
                type: "number"
            }
        ]);
        console.log("YOUR PIN HAS BEEN CHANGED!");
    }
}
else {
    console.log("INCORRECT PINCODE \n TRY AGAIN LATER!");
}
