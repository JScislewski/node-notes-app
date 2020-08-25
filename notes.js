const fs = require("fs");

const chalk = require("chalk");
const addNote = (title, content) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((note) => {
    return note.title === title;
  });
  if (duplicateNotes.length === 0) {
    notes.push({
      title,
      content,
    });
    saveNotes(notes);
    console.log(
      chalk.green("Added new note\n--------------\n"),
      chalk.blue(`Title: ${title}`),
      "\n",
      chalk.italic.cyan(`Content: ${content}`)
    );
  } else {
    console.log(chalk.red("This note already exists!"));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => {
    return note.title !== title;
  });

  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse("Note removed!"));
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.red.inverse("No note found!"));
  }
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
  removeNote,
};
