'use strict';

const path = require('path');

const config = require(path.join(__dirname, '../config/config'));

console.log(config.get('db:url'));