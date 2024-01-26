//Creates a function that returns a license badge based on which license is passed in
//If there is no license, return an empty string
function renderLicenseBadge(license) {

  switch(true){
    case license === 'MIT License':
      return '\n[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)\n'
    break;

    case license === 'Apache License 2.0':
      return '\n[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)\n'
    break;

    case license === 'ISC License':
      return '\n[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)\n'
    break;

    case license === 'BSD 3-Clause "New" or "Revised" License':
      return '\n[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)\n'
    break;

    case license === 'BSD 2-Clause "Simplified" License':
      return '\n[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)\n'
    break;

    case license === 'none':
      return '';
      break;

    default:
      return '';
    break
  }
}

//Creates a function that returns the license link
//If there is no license, return an empty string
function renderLicenseLink(license) {

  switch (true) {
    case license === 'MIT License':
      return '\n### License\n  \nThis Application is covered by the MIT License. For more information please follow this link to the [MIT License](https://opensource.org/licenses/MIT)\n'
      break;

    case license === 'Apache License 2.0':
      return '\n### License\n  \nThis Application is covered by the Apache License 2.0. For more information please follow this link to the [Apache License 2.0](https://opensource.org/licenses/Apache-2.0)\n'
      break;

    case license === 'ISC License':
      return '\n### License\n  \nThis Application is covered by the ISC License. For more information please follow this link to the [ISC License](https://opensource.org/licenses/ISC)\n'
      break;

    case license === 'BSD 3-Clause "New" or "Revised" License':
      return '\n### License\n  \nThis Application is covered by the BSD 3-Clause "New" or "Revised" License. For more information please follow this link to the [BSD 3-Clause "New" or "Revised" License](https://opensource.org/licenses/BSD-3-Clause)\n'
      break;

    case license === 'BSD 2-Clause "Simplified" License':
      return '\n### License\n  \nThis Application is covered by the BSD 2-Clause "Simplified" License. For more information please follow this link to the [BSD 2-Clause "Simplified" License](https://opensource.org/licenses/BSD-2-Clause)\n'
      break;

    case license === 'none':
      return '';
      break;
    
    default:
      return '';
      break;
  }
}

//Creates a function that returns the license section of README
//If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license != 'none') {
    return '- [License](#license)\n';
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let markdown = "";

  //add title from user
  markdown += `# ${data.title}\n`;

  //add license img/btn
  markdown += renderLicenseBadge(data.license)+ '\n';
  
  //add TOC Header
  markdown += '#### Table of Contents\n'
  //add TOC
  markdown += `
  - [Description](#description)
  - [Instructions](#instructions)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Testing](#testing)
  - [Questions](#questions)
  ` + renderLicenseSection(data.license) + '\n\n';

  //add description header
  markdown += '## Description\n\n';

  //add description text from user
  markdown += `${data.description}\n\n`;

  //add instructions Header
  markdown += `## Instructions\n\n`;

  //add instructions text from user
  markdown += `${data.instructions}\n\n`;

  //add usage Header
  markdown += `## Usage\n\n`;

  //add usage text from user
  markdown += `${data.usage}\n\n`;

  //add contributing header
  markdown += `### Contributing\n\n`

  //add contributing text from user
  markdown += `${data.contributing}\n\n`;

  //add tests header
  markdown += '### Testing\n\n';

  //add tests text from user
  markdown += `${data.testing}\n\n`;

  //adds heading for contact info
  markdown += `### Questions\n\n`

  //adds contact information
  markdown += `- My Github: [`+ data.github + `](https://github.com/` + data.github + `) \n`;
  markdown += `- My Email Address: [` + data.email + `](mailto:`+ data.email +`)\n\n`;

  //adds license information if any was selected
  markdown += renderLicenseLink(data.license);

  //returns the completed markdown string for use in the markdown file
  return markdown;
}

module.exports = generateMarkdown;