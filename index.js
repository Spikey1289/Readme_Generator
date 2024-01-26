//packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

//object of questions for user input
const questions = {
    introduction: "-Hi! welcome to Spikey1289's README Generator. Please answer the following questions to generate your README file-\n\n",
    newLine: "\n-Please remember hitting enter/return will end this question instead of making a new line.-\n-If you need a new line '\\n' will make a new line-\n\n",
    listSelect: "\n-you can use the arrow keys and enter to select a license-\n\n",

    title: "What is the title of the project: ",
    description: "Please enter a brief description of your project: ",
    instructions: "Please enter your instructions: ",
    usage: "Please enter the software/app's intended use: ",
    contributing: "Please enter a way for people to contribute to your work: ",
    testing: "Please enter the tests that will be needed to pass to allow contributions: ",
    license: "Please pick the type of license you would like to use from the following selection: ",
    github: "Please enter your Github username so that others may contact you if they have questions or comments:  ",
    email: "Please enter your email so that others may contact you if they have questions or comments: "
};

//function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
        err ? console.log(err) : console.log('Successfully created README')
    );
}

//function to initialize app
function init() {
    let data = {};

    inquirer
        .prompt([
            {
                type: 'input',
                message: questions.introduction + questions.title,
                name: 'title',
            },
            {
                type: 'input',
                message: questions.newLine + questions.description,
                name: 'description'
            },
            {
                type: 'input',
                message: questions.newLine + questions.instructions,
                name: 'instructions'
            },
            {
                type: 'input',
                message: questions.newLine + questions.usage,
                name: 'usage'
            },
            {
                type: 'input',
                message: questions.newLine + questions.contributing,
                name: 'contributing'
            },
            {
                type: 'input',
                message: questions.newLine + questions.testing,
                name: 'testing'
            },
            {
                type: 'list',
                message: questions.listSelect + questions.license,
                name: 'license',
                choices: [
                    'none', 
                    'MIT License', 
                    'Apache License 2.0', 
                    'ISC License', 
                    'BSD 3-Clause "New" or "Revised" License', 
                    'BSD 2-Clause "Simplified" License'
                ],
            },
            {
                type: 'input',
                message: questions.github,
                name: 'github'
            },
            {
                type: 'input',
                message: questions.email,
                name: 'email'
            }

        ]).then((response) => {
            data.title = response.title;
            data.description = response.description;
            data.instructions = response.instructions;
            data.usage = response.usage;
            data.contributing = response.contributing;
            data.testing = response.testing;
            data.license = response.license;
            data.github = response.github;
            data.email = response.email;
            
            writeToFile('README_OUTPUT.md', data);
        });
}

// Function call to initialize app
init();