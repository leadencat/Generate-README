// returns a license badge based on which license is passed in, returns an empty string if there is no license
function renderLicenseBadge(license) {
    if (license === 'None') {
      return '';
    } else {
      return `![License Badge](https://img.shields.io/badge/license-${license.replace(' ', '%20')}-orange)`;
    }
  }

  // returns the license link, returns an string empty if there is no license
  function renderLicenseLink(license) {
    if (license === 'MIT') {
      return `[For more information](https://choosealicense.com/licenses/mit/)`;
    } else if (license === 'Mozilla Public 2.0') {
      return `[For more information](https://choosealicense.com/licenses/mpl-2.0/)`;
    } else if (license === 'Apache 2.0') {
      return `[For more information](https://choosealicense.com/licenses/apache-2.0/)`;
    } else {
      return '';
    }
  }

  // returns the license section of the README, returns an string empty if there is no license
  function renderLicenseSection(license) {
    if (license === 'None') {
      return '';
    } else {
      return `## License
      The following readme uses a ${license} license:
      ${renderLicenseLink(license)}`;
    }
  }

  function renderLicenseContent(license) {
    if (license === 'None') {
      return '';
    } else {
      return `[License](#license)`;
    }
  }

  // function to generate the markdown

  function generateMarkdown(data) {
    const license = data.license;
  
    return `# ${data.title} 
  ${renderLicenseBadge(license)}
    
  ## Table of Contents
  [Description](#description)
  [Installation](#installation)
  [Usage](#usage)
  [Testing](#tests)
  [Contributors](#contributors)
  [Questions](#questions)
  ${renderLicenseContent(license)}
  
  ## Description
  ${data.description}
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Testing
  ${data.tests}
  
  ## Contributors
  ${data.contributors}
  
  ## Questions
  ${data.question}
  For any other questions, find me on Github: [${data.username}](https://github.com/${data.username})
  or email me at [${data.email}](mailto:${data.email})
  
  ${renderLicenseSection(license)}`
  };
  
  module.exports = generateMarkdown;