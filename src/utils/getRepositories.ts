import axios from "axios";

interface Repo {
  name: string;
}

const getRepositories = async (username: string): Promise<Repo[]> => {
  try {
    const response = await axios.get<Repo[]>(
      `https://api.github.com/users/${username}/repos`
    );
    const repos: Repo[] = response.data
      .filter((repo) => repo.name)
      .map((repo) => repo);
    return repos;
  } catch (error) {
    console.error(error);
    throw new Error(`Failed to fetch repositories for ${username}`);
  }
};

export default getRepositories;
