"use strict";
const fs = require("fs");
const packageJSON = require("../package.json");
const upath = require("upath");
const sh = require("shelljs");

module.exports = function renderScripts() {
    const sourcePath = upath.resolve(upath.dirname(__filename), "../src/js");
    const destPath = upath.resolve(upath.dirname(__filename), "../dist/.");

    sh.cp("-R", sourcePath, destPath);

    const sourcePathScriptsJS = upath.resolve(
        upath.dirname(__filename),
        "../src/js/scripts.js"
    );
    const destPathScriptsJS = upath.resolve(
        upath.dirname(__filename),
        "../dist/js/scripts.js"
    );

    const copyright = `/*!*/`;
    const scriptsJS = fs.readFileSync(sourcePathScriptsJS);

    fs.writeFileSync(destPathScriptsJS, copyright + scriptsJS);
};
