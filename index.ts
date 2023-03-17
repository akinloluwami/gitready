const argv = process.argv.slice(2);
const cloneAll = require("./src/utils/cloneAll");
const cloneRepository = require("./src/utils/cloneRepository");

if (argv[0] === "clone") {
  const username = argv[1];
  const allFlagIndex = argv.indexOf("--all");
  if (allFlagIndex > -1) {
    cloneAll(username);
  } else {
    const repos = argv.slice(2);
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
