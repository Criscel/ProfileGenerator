const inquirer = require("inquirer");
const fs = recquire("fs");

const employee = [];

function initPage() {
    startHtml();
    addMember();
}

function addMember() {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter Team Manager's Name: ",
            name: "name",
        },
        {
            type: "input",
            message: "Enter Employee ID: ",
            name: "emplid",
        },
        {
            type: "input",
            message: "Enter E-mail address: ",
            name: "email",
        },
        {
            type: "input",
            message: "Enter Office Number: ",
            name: "contact",
        }
    
])
}