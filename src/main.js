"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var process = require("node:process");
var fs = require("node:fs");
var path = require("node:path/posix");
// *** File Path Enums ***
var ENV_PATH = process.cwd();
var CONFIG_PATH = path.join(ENV_PATH, '/config/app.json');
var DATA_PATH = path.join(ENV_PATH, 'data/');
var IMAGES_PATH = path.join(ENV_PATH, 'images/');
var STYLE_PATH = path.join(ENV_PATH, 'style/');
var TEST_PATH = path.join(ENV_PATH, 'test/');
// #region Testing
var e = 'world';
var addOrConcat = function (a, b, c) {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
var myVal = addOrConcat(2, 2, 'concat');
var nextVal = addOrConcat(2, 2, 'add');
console.log(CONFIG_PATH);
console.log(DATA_PATH);
console.log(IMAGES_PATH);
console.log(STYLE_PATH);
console.log(TEST_PATH);
console.log(myVal);
console.log(nextVal);
// #endregion Testing
try {
    if (!fs.existsSync(CONFIG_PATH)) {
        throw new Error('Config file not found!');
    }
}
catch (e) {
    console.log(e);
    process.exit(1);
}
var app = {
    settings: {
        configPath: '',
    }
};
