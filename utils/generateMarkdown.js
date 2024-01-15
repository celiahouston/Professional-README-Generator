function generateMarkdown(answers) {
    const licenseBadge = generateLicenseBadge(answers.license);
    const licenseSection = generateLicenseSection(answers.license); 
    const tableOfContents = generateTableofContents(answers.tableOfContents); 

    return ` 
# ${answers.projectTitle}

${licenseBadge}
    
## Description
${answers.description}

${tableOfContents}

## Installation
${answers.installation}

## Usage 
${answers.usage}

## Contributors 
${answers.contributors}

## Testing 
${answers.testing}

## GitHub Repository 
${answers.githubrepo}

## FAQs 
${answers.faqs} 

## Contributing
${answers.contributing}

${licenseSection}
    `
}

function generateLicenseBadge(license) {
    const licenseBadges = {
        'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)', 
        'Apache 2.0': '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',  
        'Eclipse Public License 1.0': '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)',
        'GNU GPL v3': '[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)', 
    };
    return licenseBadges[license] || ''; 
}

function generateLicenseSection(license) {
    if (!license || license === 'None') {
        return '';
    }
    return `
    ## License
    
    This project is licensed under the ${license} License - see the LICENSE file for details`;
}

function generateTableofContents(selectedSections) {
    let tableOfContents =  `## Table of Contents\n`;
    selectedSections.forEach(section => {
        tableOfContents += `[${section}](#${section.toLowerCase().replace(/\s+/g, '-')})\n`;         
    });
    return tableOfContents; 
}

module.exports = generateMarkdown; 