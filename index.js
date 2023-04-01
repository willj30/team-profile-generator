const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');

const team = [];

const generateTemplate = require('./src/HTMLtemplate.js');
const createHtmlLayout = require('./createHTML');

function userInput() {
    inquirer.prompt([
       {
            type: 'input',
            message: 'Enter Employee Name: ',
            name: 'name',
            validate: function (nameInput) {
                if (nameInput) {
                    return true;
                } else {
                    return 'Please enter the Employee Name.';
                }
            }
        },
        {
            type: 'input',
            message: 'Enter Employee Id: ',
            name: 'id',
            validate: function (idInput) {
                if (idInput) {
                    return true;
                } else {
                    return 'Please enter an Employee Id.';
                }
            }
        },

        {
            type: 'input',
            message: 'Enter Email: ',
            name: 'email',
            validate: function (emailInput) {
                if (emailInput) {
                    return true;
                } else {
                    return 'Please enter Employee e-mail address.';
                }
            }
        },
        {
            type: 'list',
            message: 'Select Role: ',
            name: 'role',
            choices: ["Manager", "Engineer", "Intern"]

        },

    ])
    .then(answers => {

            if (answers.role === 'Manager') {
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'office',
                        message:'Enter office number:',
                        validate: officeInput => {
                            if (officeInput) {
                                return true;
                            } else {
                                return 'Please enter office Number.';
                            }
                        }
                        
                    }
                ])
                .then(response => {
                    console.log(response.office);
                    const manager = new Manager (answers.name, answers.email, answers.id, answers.role, response.office)
                    team.push(manager);
                    addOption()
                })
            }else if(answers.role === 'Engineer' ){
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'gitHub',
                        message:'Enter Github name:',
                        validate: githubInput => {
                            if (githubInput) {
                                return true;
                            } else {
                                return 'Please enter GitHub username.';
                            }
                        }
                    }
                ])
                .then(response => {
                    console.log(response.gitHub);
                    const EngineerTeam = new Engineer (answers.name, answers.id, answers.email, response.gitHub, answers.role,)
                    team.push(EngineerTeam);
                    addOption()
                })
            } else if (answers.role === 'Intern'){
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'school',
                        message:'Enter School name:', 
                        validate: function (schoolInput) {
                            if (schoolInput) {
                                return true;
                            } else {
                                return 'Please enter school  name.';
                            }
                        }

                    }
                ])
                .then(response =>{
                    console.log(response.school);
                    const internTeam = new Intern (answers.name,  answers.email, answers.id, answers.role, response.school)
                    team.push(internTeam);
                    addOption()
                })
            }

            else {
                const employeeTeam = new Employee (answers.name, answers.email, answers.id, answers.role);
                team.push(employeeTeam);
                addOption()

            }


            function addOption() {
                inquirer.prompt([
                    {
                        type:'confirm',
                        name: 'addMore',
                        message:'Would you like to add another Employee?'
                    }
                ])
                .then(res =>{
                    if(res.addMore === true){
                        userInput(team);
                    }else{
                        console.log('team', team)
                        let cardLayoutHtml = generateTemplate(team);
                        createHtmlLayout(cardLayoutHtml)
                    }
                })
            }
        })
}


userInput();