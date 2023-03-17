const loading = require("loading-cli");

const logSpinner = (text) => {
  const load = loading(`${text}`).start();
};

module.exports = logSpinner;
