const { exec } = require("child_process");
const path = require("path");
const fs = require("fs");

const cloneRepository = async (username, repo) => {
  const repoPath = path.join(process.cwd(), repo);

  if (fs.existsSync(repoPath)) {
    console.log(`${repo} has already been cloned`);
    return;
  }

  return new Promise((resolve, reject) => {
    exec(
      `git clone https://github.com/${username}/${repo}`,
      {
        cwd: process.cwd(),
      },
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

module.exports = cloneRepository;
