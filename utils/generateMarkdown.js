function generateMarkdown(answers) {
    return `
# ${answers.projectTitle}
    
## Description
${answers.description}

    `
}

module.exports = generateMarkdown; 