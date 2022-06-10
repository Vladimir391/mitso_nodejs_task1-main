#!/usr/bin/env node
const task1 = require('./task1-1.js')
const task2 = require('./task1-2.js')
const fs = require('fs');

var argumentiki = process.argv.slice(2);

switch (argumentiki[0]) {
    case "1":
        if (argumentiki[1].includes('.txt')) {
            let fileContent = fs.readFileSync(argumentiki[1], "utf8");
            console.log(task1.duplicateEncode(fileContent)); 
            if (argumentiki[2] == "-o") {
                fs.writeFileSync("output.txt", task1.duplicateEncode(fileContent))
            }   
        }
        else
        {
            console.log(task1.duplicateEncode(argumentiki[1]));
            if (argumentiki[2] == "-o") {
                fs.writeFileSync("output.txt", task1.duplicateEncode(argumentiki[1]));
            }   
        }    
        break;
    case "2":
        if (argumentiki[1].includes('.txt')) {
            let fileContent = fs.readFileSync(argumentiki[1], "utf8");
            console.log(task2.multiplicationTable(fileContent));
            if (argumentiki[2] == "-o") {
                fs.writeFileSync("output.txt", task2.multiplicationTable(fileContent).toString());
            }  
        }
        else
        {
            console.log(task2.multiplicationTable(argumentiki[1]));
            if (argumentiki[2] == "-o") {
                fs.writeFileSync("output.txt",  task2.multiplicationTable(argumentiki[1]).toString());
            }  
        }
        break;
    default:
        console.log("Обшибка");
        break;
}