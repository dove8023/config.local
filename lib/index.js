"use strict";

const path = require("path");
const ROOT_DIR = process.cwd();

let format = require("./format");
let configPath = path.join(ROOT_DIR, "config");
let config = format(configPath);
Object.freeze(config);
module.exports = config;