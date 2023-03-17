#!/usr/bin/env node

const { performance } = require("perf_hooks");
const program = require("commander");
const simpleGit = require("simple-git");

program
  .version("1.0.0")
  .command("clone <username> [repos...]")
  .action(async (username, repos) => {
    const startTime = performance.now();
    console.log(`Starting to clone ${repos.length} repositories...`);

    const git = simpleGit();
    git.outputHandler((command, stdout, stderr) => {
      stdout.on("data", (chunk) => {
        const logLine = chunk.toString().trim();
        if (logLine.startsWith("Cloning into")) {
          console.log(`${logLine} (${git.progress() * 100}%)`);
        }
      });
    });

    for (const repo of repos) {
      console.log(`Cloning ${repo}...`);
      await git.clone(`https://github.com/${username}/${repo}.git`);
      console.log(`Done cloning ${repo}`);
    }

    const endTime = performance.now();
    const timeTaken = ((endTime - startTime) / 1000).toFixed(2);
    console.log(`Done cloning all in ${timeTaken} seconds`);
  });

program.parse(process.argv);
