const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);
const { questions } = require("./utils/questions");
const generateMarkdown = require("./utils/generateMarkdown");

async function init() {
      const answers = await inquirer.prompt(questions);
      await writeFileAsync("README.md", generateMarkdown(answers));
  }

init();
