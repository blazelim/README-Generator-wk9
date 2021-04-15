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
        const answers = await inquirer.prompt(questionPrompt);
        console.log("Information gathered!")

        // TODO remove console log
        console.log(answers);

        console.log("Generating Markdown");

        let generatedMD = await generateMarkdown(answers);

        console.log("Generating README")
        // writing file
        await fsPromises.writeFile('./dist/README.md', generatedMD, err => {
            // if theres an error, reject the primise and send the error to the promises catch method
            if (err) {
                reject(err);
                //return out fo the function to make sure the promise doesnt accidentally execute the resolve function
                return;
            }

            // if everything went well, reseolve the promise and send the successful promise to the then() statement
            resolve({
                ok: true,
                message: 'file created!'
            });
        })
    } finally {
        console.log("README is generated in the dist folder!")
    }
}

// TODO: Create a function to initialize app
function init(questionPrompt) {
    saveFile(questionPrompt);
}

// Function call to initialize app
init(questions);
