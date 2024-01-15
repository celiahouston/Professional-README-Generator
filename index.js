import('inquirer').then(inquirerModule => {
    const inquirer = inquirerModule.default; 

    const promptUser = () => {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'projectTitle',
                message: 'What is the title of your project?',
            },
            {
                type: 'input',
                name: 'description',
                message: 'Please provide a description of your project:',
            }, 
            {
                type: 'checkbox', 
                name: 'tableOfContents',  
                message: 'Select the sections you want to include in your Table of Contents:' ,
                choices: ['Description', 'Installation', 'Usage', 'License', 'Contributing', 'Tests', 'Questions',] 
            }, 
            {
                type: 'input',
                name: 'installation',
                message: 'What steps are required to install your project?',
            }, 
            {
                type: 'input',
                name: 'usage',
                message: 'How will the project be used?',
            }, 
            {
                type: 'list',
                name: 'license',
                message: 'What license does your project have?',
                choices: ['MIT', 'Apache 2.0', 'Eclipse Public License 1.0', 'GNU GPL v3'],             
        
            }, 
            {
                type: 'input',
                name: 'contributors',
                message: 'Please name the authors of this project:',
            }, 
            {
                type: 'input',
                name: 'testing',
                message: 'How can your project be tested?',
            },  
            {
                type: 'input',
                name: 'githubrepo',
                message: 'Please provide a URL for your GitHub Repository:',
            }, 
            {
                type: 'input',
                name: 'faqs',
                message: 'Please provide additional FAQ information that may be helpful.',
            }, 
        ]); 
    }; 
 
const fs = require ('fs');

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error('Error writing file:', err);
        } else {
            console.log('Successfully wrote to', fileName); 
        }
    }); 
}

function init() {
    promptUser().then((answers) => {
        const generateMarkdown = require('./utils/generateMarkdown.js');
        const markdown = generateMarkdown(answers);
        writeToFile('README.md', markdown);
     }); 
} 

    init(); 

}).catch(error => console.error('Error importing inquirer:', error)); 