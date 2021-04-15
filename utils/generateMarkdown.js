// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "none") {
    return "";
  } else {

    var modifiedLicense = license.replace(" ", "_")

    return `![Badge for License](https://img.shields.io/badge/license-${modifiedLicense}-blueviolet)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "none") {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "none") {
    return "";
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
  console.log(data.contribution) //required
  console.log(data.email) //required
  console.log(data.test)
  console.log(data.license)
 

  let runningMarkdown = `
  # ${data.name}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}`
  
  let runningToC = `
  ## Table of Contents
  `;

  
  if (data.installation !== '') {
    runningToC += `
* [Installation](#installation)`
  }

  if (data.usage !== '') {
    runningToC += `
* [Usage](#usage)`
  }

  runningMarkdown += runningToC

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
  

// * [Usage](#usage)
// * [Credits](#credits)
// * [License](#license)

return runningMarkdown;
;
}

module.exports = generateMarkdown;
