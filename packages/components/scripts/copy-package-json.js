const path = require('path');
const fse = require('fs-extra');

const source = path.resolve(__dirname, '../package.json')
const target = path.resolve(__dirname, '../build/package.json')

fse.copy(source, target)
