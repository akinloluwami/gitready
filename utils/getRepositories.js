const axios = require("axios");

const getRepositories = async (username) => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}/repos`
    );
    const repos = response.data.filter((repo) => repo.name).map((repo) => repo);
    return repos;
  } catch (error) {
    console.error(error);
    throw new Error(`Failed to fetch repositories for ${username}`);
  }
};

export default getRepositories;
