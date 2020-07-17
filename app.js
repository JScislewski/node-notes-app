const chalk = require("chalk");
const yargs = require("yargs");
const { addNote, removeNote } = require("./notes");
const { argv } = require("yargs");

yargs
  .command({
    command: "add",
    describe: "Add new note",
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
    handler() {
      addNote(argv);
    },
  })
  .command({
    command: "remove",
    describe: "Remove a note",
    builder: {
      title: {
        describe: "Note title",
        demandOption: true,
        type: "string",
      },
    },
    handler() {
      removeNote(argv);
    },
  })
  .command({
    command: "list",
    describe: "List all notes",
    handler() {
      console.log(chalk.blue("List all notes"));
    },
  })
  .command({
    command: "read",
    describe: "Read note",
    handler() {
      console.log(chalk.blue("Read a note"));
    },
  });
yargs.parse();
