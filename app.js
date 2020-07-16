const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes");
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
      notes.addNote(argv.title, argv.content);
    },
  })
  .command({
    command: "remove",
    describe: "Remove a note",
    handler() {
      console.log(chalk.red("Removing a note"));
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
