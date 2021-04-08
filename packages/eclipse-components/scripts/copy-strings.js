/* eslint-disable */
const path = require('path');
const fse = require('fs-extra');

const [copySource, copyTarget] = process.argv.slice(2);

const toAbs = relPath => path.normalize(path.resolve(__dirname, relPath));
const copyStrings = (from, to) => {
  fse.copy(from, to);
}

const run = async () => {
  await Promise.all([
    copyStrings(toAbs(copySource), toAbs(copyTarget))
  ]);
}

run();
