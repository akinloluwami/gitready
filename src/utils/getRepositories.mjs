// const got = require("got-fetch");

import fetch from "got-fetch";

const getRepositories = async (username) => {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos`
    );
    const repos = response.data.filter((repo) => repo.name).map((repo) => repo);
    return repos;
  } catch (error) {
    console.error(error);
    throw new Error(`Failed to fetch repositories for ${username}`);
  }
};

// module.exports = getRepositories;
export default getRepositories;
