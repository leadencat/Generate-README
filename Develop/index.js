// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'Input',
        message: 'What is the title of your program?',
        name: 'Title',
    },
    {
        type: 'List',
        message: 'What license is your program using?',
        name: 'License',
        choices: ['MIT', 'Mozilla Public 2.0', 'Apache 2.0', 'None']
    },
    {
        type: 'Editor',
        message: 'Enter a brief description of your program -',
        name: 'Description',
    },
    {
        type: 'Editor',
        message: 'Describe installation instructions -',
        name: 'Installation',
    },
    {
        type: 'Editor',
        message: 'Describe how to use the program -',
        name: 'Usage',
    },
    {
        type: 'Editor',
        message: 'Describe any tests performed on the program -',
        name: 'Tests',
    },
    {
        type: 'Editor',
        message: 'List any contributions to this program -',
        name: 'Contributors',
    },
    {
        type: 'Editor',
        message: 'For any questions the user may have, answer -',
        name: 'Questions'
    },
    {
        type: 'Input',
        message: 'What is your GitHub username?',
        name: 'Username',
    },
    {
        type: 'Input',
        message: 'What is your email?',
        name: 'Email',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const generateREADME = generateMarkdown(data);

    fs.writeFileA(fileName, generateREADME, (err) => err ? console.log(err) : console.log('Generated README file.')
    )
};

// TODO: Create a function to initialize app
function init() {
    const fileName = 'README.md';
    inquirer.prompt(questions)
        .then((response) => {
            writeToFile(fileName, response);
        }) 
};

// Function call to initialize app
init();