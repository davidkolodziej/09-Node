// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = ["What is your name?",
"How old are you?",
"Where were you born?",
"What is your email address?",
"What is your phone number?",];

// TODO: Create a function to write README file
function createReadme(){

    const fs = require('fs');
  
    const fileContent = `# README
  
    **Table of Contents**
  
    1. [Description](#description)
    2. [Installation Instructions](#installation-instructions)
    3. [Usage Information](#usage-information)
    4. [Contribution Guidelines](#contribution-guidelines)
    5. [Test Instructions](#test-instructions)
    6. [License](#license)
    7. [Questions](#questions)
  
    ## Description
  
    Write a general description of your project here.
  
    ## Installation Instructions
  
    Provide instructions on how to install your project.
  
    ## Usage Information
  
    Provide instructions on how to use your project.
  
    ## Contribution Guidelines
  
    Explain how others can contribute to your project.
  
    ## Test Instructions
  
    Provide details on how to test your project.
  
    ## License
  
    Choose a license for your project and include it here.
  
    ## Questions
  
    For any questions or feedback, please contact me on github at [davidkolodziej1].
  
    ## Author
  
    Include your name and contact details here.`;
  
    fs.writeFile('README.md', fileContent, (err) => {
      if (err) throw err;
      console.log('README file has been created');
    });
  }

// TODO: Create a function to initialize app
function init() {initialize.createReadme}

function init() {
    // Your initialization code here
    console.log("App initialized");
 }
