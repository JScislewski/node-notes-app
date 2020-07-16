const chalk = require("chalk");
const addNote = (title, content) => {
  console.log(
    chalk.green("Adding new note\n--------------\n"),
    chalk.blue(`Title: ${title}`),
    "\n",
    chalk.italic.cyan(`Content: ${content}`)
  );
};

module.exports = {
  addNote,
};
