const fs = require("fs");

const chalk = require("chalk");
const addNote = ({ title, content }) => {
  console.log(
    chalk.green("Adding new note\n--------------\n"),
    chalk.blue(`Title: ${title}`),
    "\n",
    chalk.italic.cyan(`Content: ${content}`)
  );
  const note = {
    title,
    content,
  };
  const noteJSON = JSON.stringify(note);
  fs.writeFileSync("notes.json", noteJSON);
};

const loadNotes = () => {
  const dataBuffer = fs.readFileSync("notes.json");
  const dataJSON = dataBuffer.toString();
  return JSON.parse(dataJSON);
};

module.exports = {
  addNote,
};
