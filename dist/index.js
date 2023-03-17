var argv = process.argv.slice(2);
var cloneAll = require("./src/utils/cloneAll");
var cloneRepository = require("./src/utils/cloneRepository");
if (argv[0] === "clone") {
    var username = argv[1];
    var allFlagIndex = argv.indexOf("--all");
    if (allFlagIndex > -1) {
        cloneAll(username);
    }
    else {
        var repos = argv.slice(2);
        var _loop_1 = function (repo) {
            cloneRepository(username, repo)
                .then(function () {
                console.log("Done cloning ".concat(repo));
            })
                .catch(function (err) {
                console.error("Error cloning ".concat(repo, ": ").concat(err));
            });
        };
        for (var _i = 0, repos_1 = repos; _i < repos_1.length; _i++) {
            var repo = repos_1[_i];
            _loop_1(repo);
        }
    }
}
