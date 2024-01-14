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
                type: 'input',
                name: 'authors',
                message: 'Please name the authors of this project:',
            }, 
            {
                type: 'input',
                name: 'testing',
                message: 'How can your project be tested?',
            }, 
            // {
            //     type: 'input',
            //     name: 'license',
            //     message: 'Please provide a description of your project:',
            // }, 
            // {
            //     type: 'input',
            //     name: 'badges',
            //     message: 'Please provide a description of your project:',
            // }, 
            {
                type: 'input',
                name: 'githubRepo',
                message: 'Please provide a URL for your GitHub Repository:',
            }, 
        ]); 
    }; 
 
const fs = require ('fs');

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error('Errpr writing file:', err);
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