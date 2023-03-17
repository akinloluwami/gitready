import { exec } from "child_process";

const cloneRepository = async (username: string, repo: string) => {
  return new Promise<void>((resolve, reject) => {
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

export default cloneRepository;
