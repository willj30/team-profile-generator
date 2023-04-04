const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');
const team = [];
const generateTemplate = require('./src/HTMLtemplate.js');
const OUTPUT_DIR = path.resolve(__dirname, "dist")
const outputPath = path.join(OUTPUT_DIR, "teamProfile.html");

const validateEmail = (email) => {
    const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    return emailRegex.test(email) || 'Please enter a valid email address';
  };
  
const validateNumber = (number) => {
    return Number.isInteger(Number(number)) || 'Please enter a valid number';
  };

const validateString = (string) => {
    return string !== '' || 'Please enter letters only';
    };

const teamGenerator = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your team manager name? (Required)',
            validate: validateString,
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter your manager employee ID (Required)',
            validate: validateNumber,
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your manager email address (Required)',
            validate: validateEmail,
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter your manager office number (Required)',
            validate: validateNumber
        },
    ]).then(answers => {
        console.log(answers);
        const manager = new Manager(answers.name, answers.employeeId, answers.email, answers.officeNumber);
        team.push(manager);
        promptMenu();
    })
};

const promptMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'Do you want to add more team members or finish building your team?',
            choices: ['Add an engineer', 'Add an intern', 'Finish building my team']
        }])
        .then(userChoice => {
            switch (userChoice.menu) {
                case "Add an engineer":
                    promptEngineer();
                    break;
                case "Add an intern":
                    promptIntern();
                    break;
                default:
                    buildTeam();
            }
        });
};

const promptEngineer = () => {
    console.log(`
    ===============
    Adding a New Engineer
    ===============
    `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the engineers name? (Required)',
            validate: validateString,
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter the employee ID (Required)',
            validate: validateNumber,
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter engineer email address (Required)',
            validate: validateEmail,
        },
        {
            type: 'input',
            name: 'gitHub',
            message: 'Enter the engineer GitHub username.',
            validate: validateString,
        },
    ]).then(answers => {
        console.log(answers);
        const engineer = new Engineer(answers.name, answers.employeeId, answers.email, answers.gitHub);
        team.push(engineer);
        promptMenu();
    })
};

const promptIntern = () => {
    console.log(`
    ===============
    Adding a New Intern
    ===============
    `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the intern? (Required)',
            validate: validateString,
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter the employee ID (Required)',
            validate: validateNumber,
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter the intern email address (Required)',
            validate: validateEmail,
        },
        {
            type: 'input',
            name: 'school',
            message: 'Enter the intern school name. (Required)',
            validate: school => {
                if (school) {
                    return true;
                } else {
                    console.log('Please enter a school name!');
                    return false;
                }
            }
        }
    ]).then(answers => {
        console.log(answers);
        const intern = new Intern(answers.name, answers.employeeId, answers.email, answers.school);
        team.push(intern);
        promptMenu();
    })
};

const buildTeam = () => {
    console.log(`
    ===============
    Finished building your team!
    ===============
    `);

    // Create the output directory if the output path doesn't exist
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, generateTemplate(team), "utf-8");
}

teamGenerator();