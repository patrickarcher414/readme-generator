
const genMD = data => {
  return `
  # ${data.title}

  ## Description
  ${data.description}
  
  ## Table of Contents

  [Description](#description)

  [Installation](#installation)

  [Usage](#usage)

  [License](#license)

  [Contributing](#contributing)

  [Questions](#questions)
 
  ## Insallation

  ${data.installation}
  
  ## Usage

  ${data.usage}
  ![${data.altText}](assets/images/screenshot.png)
  
  ## License

  ${data.license}
  
  ## Contributing

  ${data.contributing}
  
  ### Questions

  Email me with any questions you may have about the application<a href='mailto:${data.email}'> ${data.email}</a>
  
  Visit the application Repo to learn more about it [${data.github}]
`
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
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install your project?'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Save an image as screenshot.png to the images folder.'
    },
    {
      type: 'input',
      name: 'altText',
      message: 'Write alt-text for your application screenshot.'
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your application.',
      choices: [
        'MIT',
        'Apache License 2.0',
        'GNU GPLv3 ',
        'ISC',
        'None'
      ]
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'List your collaborators, if any, with links to their GitHub profiles.'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address.'
    },
    {
      type: 'input',
      name: 'github',
      message: 'Paste a link to your GitHub.'
    }
  
  ])
  .then( data => {
    console.log(data)

    fs.writeFile('README.md', genMD(data), err => {
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

