import { argv } from "process";
import cloneAll from "./src/utils/cloneAll";
import cloneRepository from "./src/utils/cloneRepository";

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
