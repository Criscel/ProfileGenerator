const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const Manager = require("./positions/manager")
const Intern = require("./positions/intern")
const Engineer = require("./positions/engineer")

const render = require("./render")

const outputPath = path.resolve(__dirname,"output", "myteam.html")

function initPage() {
    startHtml();
    addMember();
}

var teamMembers = [];
function buildPage(){
    fs.writeFileSync(outputPath, render(teamMembers), "utf-8")
}

function createTeam(){
    
    inquirer.prompt([
        {
          type: "list",
          name: "memberChoice",
          message: "Which type of team member would you like to add?",
          choices: [
              "Manager",
            "Engineer",
            "Intern",
            "Done Adding Members"
          ]
        }
      ]).then(userChoice => {
        switch(userChoice.memberChoice) {
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
          addIntern();
          break;
          case "Manager":
              addManager();
              break;
        default:
          buildPage();
        }
      });

}

function addManager(){
    inquirer.prompt([{
        type: "input",
        name: "managerName",
        message: "Enter Manager's Name: ",
    },
    {
        type: "input",
        name: "managerId",
        message: "Enter Manager's ID: ",
    },
    {
        
        type: "input",
        name: "managerEmail",
        message: "Enter Manager's E-mail: ",
    },
    {
        type: "input",
        name: "officeNumber",
        message: "Enter Manager's Office Number: ",
    }


]).then(answers => {
    var manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.officeNumber);
    teamMembers.push(manager);
    createTeam();
    
})
}

function addEngineer() {
    inquirer.prompt([
      {
        type: "input",
        name: "engineerName",
        message: "Enter Engineer's Name: ",
      
      },
      {
        type: "input",
        name: "engineerId",
        message: "Enter Engineer's ID: ",
        
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "Enter Engineer's Email: ",
        
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "Enter Engineer's Github Username: ",
        
      }
    ]).then(answers => {
      const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
      teamMembers.push(engineer);
      
      createTeam();
    });
  }

  function addIntern() {
    inquirer.prompt([
      {
        type: "input",
        name: "internName",
        message: "Enter Intern's Name: ",
        
      },
      {
        type: "input",
        name: "internId",
        message: "Enter Intern's ID: ",
        
      },
      {
        type: "input",
        name: "internEmail",
        message: "Enter Intern's E-mail: ",
        
      },
      {
        type: "input",
        name: "internSchool",
        message: "Enter Intern's Uni: ",
        
      }
    ]).then(answers => {
      const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
      teamMembers.push(intern);
      
      createTeam();
    });
  }

  createTeam()