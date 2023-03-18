#!/usr/bin/env node
// const { argv } = require("process");
// const cloneAll = require("./utils/cloneAll");
// const cloneRepository = require("./utils/cloneRepository");
"use strict";

var _process = require("process");
var _cloneRepository = _interopRequireDefault(require("./utils/cloneRepository"));
var _cloneAll = _interopRequireDefault(require("./utils/cloneAll.mjs"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
if (_process.argv[2] === "clone") {
  var username = _process.argv[3];
  var allFlagIndex = _process.argv.indexOf("--all");
  if (allFlagIndex > -1) {
    (0, _cloneAll["default"])(username);
  } else {
    var repos = _process.argv.slice(4);
    var _iterator = _createForOfIteratorHelper(repos),
      _step;
    try {
      var _loop = function _loop() {
        var repo = _step.value;
        (0, _cloneRepository["default"])(username, repo).then(function () {
          console.log("Done cloning ".concat(repo));
        })["catch"](function (err) {
          console.error("Error cloning ".concat(repo, ": ").concat(err));
        });
      };
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        _loop();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
}