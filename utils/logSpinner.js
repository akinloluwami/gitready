const cliSpinners = require("cli-spinners");

const logSpinner = (text) => {
  console.log(`${cliSpinners.arrow3} ${text}`);
};

module.exports = logSpinner;
