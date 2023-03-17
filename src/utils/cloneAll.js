const getRepositories = require("./getRepositories");
const cloneRepository = require("./cloneRepository");
const logSpinner = require("./logSpinner");

const cloneAll = async (username) => {
  logSpinner(`Cloning all repositories for ${username}...`);
  const repos = await getRepositories(username);
  console.log(`Found ${repos.length} repositories:`);
  let i = 1;
  for (const repo of repos) {
    logSpinner(`Cloning ${repo.name} (${i}/${repos.length})...`);
    await cloneRepository(username, repo.name);
    console.log(`Done cloning ${repo.name}`);
    i++;
  }
  console.log(`Done cloning all repositories for ${username}`);
};

module.exports = cloneAll;
