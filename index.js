#!/usr/bin/env node
const program = require("commander");
const { argv } = require("process");
const cloneAll = require("./utils/cloneAll");
const cloneRepository = require("./utils/cloneRepository");

program
  .version("1.0.0")
  .description("A simple CLI tool")
  .option("-a, --action <action>", "Action to perform")
  .option("-f, --file <file>", "File to process")
  .action(() => {
    const file = fs.readFileSync(program.file, "utf8");
    console.log(`Performing "${program.action}" on file "${file}".`);
  });

program.parse(process.argv);

if (argv[2] === "clone") {
  const username = argv[3];
  const allFlagIndex = argv.indexOf("--all");
  if (allFlagIndex > -1) {
    cloneAll(username);
  } else {
    const repos = argv.slice(4);
    for (const repo of repos) {
      cloneRepository(username, repo)
        .then(() => {
          console.log(`Done cloning ${repo}`);
        })
        .catch((err) => {
          console.error(`Error cloning ${repo}: ${err}`);
        });
    }
  }
}
