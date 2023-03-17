#!/usr/bin/env node

const simpleGit = require("simple-git");
const args = process.argv.slice(2);

if (args[0] === "clone") {
  const username = args[1];
  const repos = args.slice(2);

  repos.forEach((repoName) => {
    const repoUrl = `https://github.com/${username}/${repoName}.git`;
    simpleGit().clone(repoUrl);
  });
} else {
  console.error(`Unknown command: ${args[0]}`);
  process.exit(1);
}
