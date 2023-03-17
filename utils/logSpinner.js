const cliSpinners = require("cli-spinners");

const logSpinner = (text) => {
  console.log(`${cliSpinners.earth} ${text}`);
};

module.exports = logSpinner;
