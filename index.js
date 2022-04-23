
const generateMarkdown = data => {
    return `
    # ${data.title}

  ## Description
  ${data.description}
`
//   ## Table of Contents
//   [Description](ReadMe.md/#description)
//   [Installation](ReadMe.md/#installation)
//   [Usage](ReadMe.md/#usage)
//   [License](ReadMe.md/#license)
//   [Contributing](ReadMe.md/#contributing)
//   [Questions](ReadMe.md/##questions)

//   ## Insallation
// ${data.installation}

// ## Usage
// ${data.usage}

// ## License
// ${data.license}

// ## Constributing
// ${data.contributing}

// ## Questions
// ${data.email}
// ${data.github}

}

const fs = require('fs')

var inquirer = require('inquirer');
inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the Title of your README?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a description for your app.'
    }
  
  ])
  .then( data => {
    console.log(data)

    fs.writeFile('README.md', generateMarkdown(data), err => {
        if (err) throw err
        console.log('File saved')
    })

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

