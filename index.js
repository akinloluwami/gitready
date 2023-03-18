#!/usr/bin/env node
// const { argv } = require("process");
// const cloneAll = require("./utils/cloneAll");
// const cloneRepository = require("./utils/cloneRepository");

import { argv } from "process";
import cloneRepository from "./utils/cloneRepository";
import cloneAll from "./utils/cloneAll.mjs";

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
