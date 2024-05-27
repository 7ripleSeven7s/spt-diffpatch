"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var node_fs_1 = require("node:fs");
var node_process_1 = require("node:process");
// *** File Path Enums ***
var CONFIG_PATH = '../config/';
var DATA_PATH = '../data/';
var IMAGES_PATH = '../images/';
var STYLE_PATH = './style/';
var TEST_PATH = '../test/';
// #region Testing
var e = 'world';
var addOrConcat = function (a, b, c) {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
var myVal = addOrConcat(2, 2, 'concat');
var nextVal = addOrConcat(2, 2, 'add');
console.log(myVal);
console.log(nextVal);
// #endregion Testing
try {
    if (!node_fs_1.default.existsSync(CONFIG_PATH)) {
        throw new Error('Config file not found!');
    }
}
catch (e) {
    console.log(e);
    (0, node_process_1.exit)(1);
}
var dataDir = node_fs_1.default.readdirSync(DATA_PATH);
var configDir = node_fs_1.default.readdirSync(CONFIG_PATH);
var fileHandle = Promise.resolve("".concat(DATA_PATH)).then(function (s) { return require(s); });
