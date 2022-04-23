//function to generate markdown for README
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

module.exports = generateMarkdown

