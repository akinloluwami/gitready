const { exec } = require("child_process");
const argv = process.argv.slice(2);
const getRepositories = require("./utils/getRepositories");

const cloneRepository = async (username, repo) => {
  return new Promise((resolve, reject) => {
    exec(
      `git clone https://github.com/${username}/${repo}`,
      (err, stdout, stderr) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      }
    );
  });
};

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
