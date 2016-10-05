"use strict";

const path = require("path");
const nconf = require("nconf");


nconf.argv();

nconf.env();

nconf.file({file: path.join(__dirname, process.env.activeProfile+".json")});

module.exports = nconf;
