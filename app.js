const chalk = require("chalk");
const yargs = require("yargs");

yargs
  .command({
    command: "add",
    describe: "Adding command",
    handler: function () {
      console.log(chalk.green("Adding a note"));
    },
  })
  .command({
    command: "remove",
    describe: "removing command",
    handler: function () {
      console.log(chalk.red("Removing a note"));
    },
  });
yargs.parse();

/* yargs
  .command({
    command: "add",
    describe: "Add new note",
    hander: function () {
      console.log(chalk.red("Removing note"));
    },
  })
  .command({
    command: "remove",
    describe: "Remove a note",
    hander: function () {
      console.log(chalk.red("Removing note"));
    },
  });

yargs.parse(); */
