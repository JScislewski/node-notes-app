const chalk = require("chalk");
const yargs = require("yargs");
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
    handler: function () {
      console.log(
        chalk.green("Adding new note\n--------------\n"),
        chalk.blue(`Title: ${argv.title}`),
        "\n",
        chalk.italic.cyan(`Content: ${argv.content}`)
      );
    },
  })
  .command({
    command: "remove",
    describe: "Remove a note",
    handler: function () {
      console.log(chalk.red("Removing a note"));
    },
  })
  .command({
    command: "list",
    describe: "List all notes",
    handler: function () {
      console.log(chalk.blue("List all notes"));
    },
  })
  .command({
    command: "read",
    describe: "Read note",
    handler: function () {
      console.log(chalk.blue("Read a note"));
    },
  });
yargs.parse();
