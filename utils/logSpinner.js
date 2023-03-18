"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var frames = ["⣾", "⣽", "⣻", "⢿", "⡿", "⣟", "⣯", "⣷"];
var logSpinner = function logSpinner(text) {
  var i = 0;
  var spinnerInterval = setInterval(function () {
    process.stdout.write("\r".concat(frames[i], " ").concat(text));
    i = (i + 1) % frames.length;
  }, 200);
  return function () {
    clearTimeout(spinnerInterval);
    process.stdout.write("\r".concat(" ".repeat(frames[frames.length - 1].length), "\r").concat(text));
  };
};

// module.exports = logSpinner;
var _default = logSpinner;
exports["default"] = _default;