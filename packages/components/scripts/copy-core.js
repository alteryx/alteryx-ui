/* eslint-disable */
const path = require('path');
const fse = require('fs-extra');

const [copySource, copyTarget] = process.argv.slice(2);

const run = async () => {
  if (!copySource) {
    console.error('ERROR: copy-files.js script requires a copy source glob pattern as first command line arg.');
    return;
  }

  if (!copyTarget) {
    console.error('ERROR: copy-files.js script requires a copy target directory path as second command line arg.');
    return;
  }
  fse.copySync(path.resolve(__dirname, copySource), path.resolve(__dirname, copyTarget))
}

run();
