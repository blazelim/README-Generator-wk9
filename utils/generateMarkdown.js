// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "none") {
    return "";
  } else {

    var modifiedLicense = license.replace(" ", "_")

    return `![Badge for License](https://img.shields.io/badge/license-${modifiedLicense}-blueviolet)`
  }
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "none") {
    return "";
  } else if (license ==="MIT") {
    return "https://choosealicense.com/licenses/mit/";
  } else if (license ==="GNU GPLv3") {
    return "https://choosealicense.com/licenses/gpl-3.0/";
  } else if (license ==="Apache 2.0") {
    return "https://www.apache.org/licenses/LICENSE-2.0";
  } else if (license ==="ISC License") {
    return "https://choosealicense.com/licenses/isc/";
  }

  //["none", "MIT", "GNU GPLv3" , "Apache 2.0", "ISC License"
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "none") {
    return "";
  } else {
    return `
## License
This project is covered under the ${license} license.
[Click here to see the terms of the license](${renderLicenseLink(license)})`
  }
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data.github) //required
  console.log(data.name) //required
  console.log(data.description) //required
  // TOC
  console.log(data.installation)
  console.log(data.usage)
  console.log(data.contributing)
  console.log(data.email) //required
  console.log(data.test)
  console.log(data.license)
 

let runningMarkdown = `
# ${data.name}
${renderLicenseBadge(data.license)}

## Description
${data.description}`
  
// Start table of contents section
  let runningToC = `
## Table of Contents`;

  
  if (data.installation !== '') {
    runningToC += `
* [Installation](#installation)`
  }

  if (data.usage !== '') {
    runningToC += `
* [Usage](#usage)`
  }

  if (data.contributing !== '') {
    runningToC += `
* [Contributing](#contributing)`
      }
  

  if (data.test !== '') {
    runningToC += `
* [Test](#test)`
  }

  if (data.license !== 'none') {
    runningToC += `
* [License](#license)`
}

runningToC += `
* [Questions](#questions)`
  runningMarkdown += runningToC

// End table of contents section

// ===================================================================================
// Adding each section to the markdown

  // adding installation instruction section
  if (data.installation !== '') {
    let instructions = `
## Installation
${data.installation}`

    runningMarkdown += instructions;
  }

// adding usage section
    if (data.usage !== '') {
      let usageSection = `
## Usage
${data.usage}`
  
runningMarkdown += usageSection;
}
  
// adding contributing section
if (data.contributing !== '') {
  let contributingSection = `
## Contributing
${data.contributing}`

runningMarkdown += contributingSection;
}

// adding test section to markdown
if (data.test !== '') {
  let testSection = `
## Test
${data.test}`
  
  runningMarkdown += testSection;
} 

if (data.license !== 'none') {

var licenseSection = renderLicenseSection(data.license);
  
console.log(licenseSection);
runningMarkdown += `
${licenseSection}`
}

runningMarkdown += `
## Questions
Any questions or concerns?
Contact me on my github: [${data.github}](https://github.com/${data.github}/)

Or email me at: ${data.email}`


return runningMarkdown;
};

module.exports = generateMarkdown;
