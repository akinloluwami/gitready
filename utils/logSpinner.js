const ora = require("ora");

const logSpinner = (text) => {
  ora(text).start();
};

module.export = logSpinner;
