// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const fsPromises = fs.promises
const generateMarkdown = require('./utils/generateMarkdown.js');
const { generateKeyPair } = require('crypto');

// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        name:'name',
        message:'What is the name of your project?',
        validate: projectNameInput =>{
            if (projectNameInput){
                return true
            } else{
                console.log("Please enter your project's name!")
                return false
            }
        }
    },
    {
        type:'input',
        name:'description',
        message:'Provide a description of the project(Required)?',
        validate: descriptionInput =>{
            if (descriptionInput){
                return true
            } else{
                console.log("Please enter your project's name!")
                return false
            }
        }
    },
    {
        type:'input',
        name:'installation',
        message:'How is your project installed? Provide a step-by-step description on how to get your project running',
        validate: installationInput =>{
            if (installationInput) {
                return true;
            } else {
                console.log('Please describe how to install your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'After installation, how does a user use your project?',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please describe how to use your project');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Who has contributed to your program?',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('Please input everyone that has contributed to your project');
                return false;
            }
        }
    },
    {
        type:'input',
        name:'email',
        message:'Enter your email address.',
        validate: emailInput => {
            if(emailInput){
                return true;
            } else {
                console.log("Please enter your email address.")
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'If applicable, please describe any tests for your program (enter blank for no tests)',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license would you like to put on your program?',
        choices: ["none", "MIT", "GNU GPLv3" , "Apache 2.0", "ISC License"]
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

async function saveFile (questionPrompt){
    try{
    const information = await inquirer.prompt(questionPrompt)
    
    .then((answers) => {
        console.log(answers);
        return answers;
    })

    .then((answers) => {
        let generatedMD = generateMarkdown(answers);
        return generatedMD
    })

    // .then((stringOutput) => console.log(stringOutput))

    // fsPromises.writeFile('readMe.md', information)
    } catch (error){
         console.error(error)
     }
}
// TODO: Create a function to initialize app
function init(questionPrompt) {
    saveFile(questionPrompt);
}

// Function call to initialize app
init(questions);
