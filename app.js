const chalk = require("chalk");
const yargs = require("yargs");
const { addNote, removeNote, listNotes } = require("./notes.js");

yargs.version("1.1.0");

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    content: {
      describe: "Note content",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    addNote(argv.title, argv.content);
  },
});

yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    removeNote(argv.title);
  },
});

yargs.command({
  command: "list",
  describe: "List your notes",
  handler() {
    listNotes();
  },
});

yargs.command({
  command: "read",
  describe: "Read a note",
  handler() {
    console.log(chalk.blue("Read a note"));
  },
});

yargs.parse();
