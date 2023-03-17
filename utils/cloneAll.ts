import getRepositories from "./getRepositories";
import cloneRepository from "./cloneRepository";
import logSpinner from "./logSpinner";

const cloneAll = async (username: string) => {
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

export default cloneAll;
