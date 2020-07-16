const fs = require("fs");

const chalk = require("chalk");
const addNote = ({ title, content }) => {
  console.log(
    chalk.green("Adding new note\n--------------\n"),
    chalk.blue(`Title: ${title}`),
    "\n",
    chalk.italic.cyan(`Content: ${content}`)
  );
  const notes = loadNotes();
  notes.push({
    title,
    content,
  });
  saveNotes(notes);
};

const saveNotes = (notes) => {
  const notesJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", notesJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    console.log(JSON.parse(dataJSON));
    return JSON.parse(dataJSON);
  } catch (error) {
    console.log(chalk.red("There are no notes"));
    return [];
  }
};

module.exports = {
  addNote,
};
