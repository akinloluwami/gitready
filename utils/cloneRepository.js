const { exec } = require("child_process");

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

export default cloneRepository;
