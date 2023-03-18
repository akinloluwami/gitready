const getRepositories = require("./getRepositories");
const cloneRepository = require("./cloneRepository");
const logSpinner = require("./logSpinner");
const path = require("path");
const fs = require("fs");

const cloneAll = async (username) => {
  console.log(`Cloning all repositories for ${username}...`);
  const repos = await getRepositories(username);
  console.log(`Found ${repos.length} repositories:`);

  const clonedRepos = [];

  for (let i = 0; i < repos.length; i++) {
    const repo = repos[i];
    const repoPath = path.join(process.cwd(), repo.name);

    if (fs.existsSync(repoPath)) {
      console.log(`${repo.name} has already been cloned`);
      continue;
    }

    const spinnerCleanup = logSpinner(
      `Cloning ${repo.name} (${i + 1}/${repos.length})...`
    );
    try {
      await cloneRepository(username, repo.name);
      clonedRepos.push(repo.name);
      console.log(`Done cloning ${repo.name}`);
    } catch (error) {
      console.error(`Failed to clone ${repo.name}: `, error.message);
    } finally {
      spinnerCleanup();
    }
  }
  console.log(`Done cloning all repositories for ${username}`);
};

module.exports = cloneAll;
