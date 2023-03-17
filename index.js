const { exec } = require("child_process");
const argv = process.argv.slice(2);

const cloneAll = async (username) => {
  console.log(`Cloning all repositories for ${username}...`);
  const repos = await getRepositories(username);
  console.log(`Found ${repos.length} repositories:`);
  let i = 1;
  for (const repo of repos) {
    console.log(`Cloning ${repo.name} (${i}/${repos.length})...`);
    await cloneRepository(username, repo.name);
    console.log(`Done cloning ${repo.name}`);
    i++;
  }
  console.log(`Done cloning all repositories for ${username}`);
};

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

const getRepositories = async (username) => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}/repos`
    );
    const repos = response.data.map((repo) => repo.name);
    return repos;
  } catch (error) {
    console.error(error);
    throw new Error(`Failed to fetch repositories for ${username}`);
  }
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
