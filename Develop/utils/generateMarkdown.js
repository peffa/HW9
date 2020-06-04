generateMarkdown = (answers) => {
  const { title, description, url, installation, usage, contribution, test, license, username, email } = answers;

  const badgeLicense = license.replace(/\s/g, '%20'); 

  return `
  # ${title}

  [![GitHub license](https://img.shields.io/badge/license-${badgeLicense}-blue)](${url})

  ## Description
  ${description}
  
  ## Table of Contents
  * [Installation](#installation)
  * [License](#license)
  * [Contribution](#contribution)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  \`\`\`
  ${installation}
  \`\`\`
  
  ## Usage
  ${usage}
  
  ## License
  ${license}

  ## Contribution
  ${contribution}

  ## Tests
  \`\`\`
  ${test}
  \`\`\`

  ## Questions
  If you have any questions about the repo, open an issue or contact [${username}](https://github.com/peffa) directly at ${email}.

  `  
}

module.exports = generateMarkdown;
