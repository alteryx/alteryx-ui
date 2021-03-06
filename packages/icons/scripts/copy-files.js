/**
 * TEMPORARY FILE!!
 * Will be removed after stable documentation release
 * */

const fse = require('fs-extra');
const glob = require('glob');

const path = require('path');

async function copyFile(file) {
  const buildPath = path.resolve(__dirname, '../build/', path.basename(file));
  await fse.copy(file, buildPath);
  console.log(`Copied ${file} to ${buildPath}`);
}

function typescriptCopy(from, to) {
  const files = glob.sync(from, { cwd: from });
  const cmds = files.map(file => {
    const parsed = path.parse(file);
    const parsedPath = parsed.dir.split(path.sep);
    const folder = parsedPath[parsedPath.length - 1];
    fse.copy(path.resolve(file), path.resolve(__dirname, `../build/es/${folder}`, path.basename(file)));
  });
  return Promise.all(cmds);
}

async function createPackageFile() {
  const packageData = await fse.readFile(path.resolve(__dirname, '../package.json'), 'utf8');
  const { nyc, scripts, devDependencies, workspaces, ...packageDataOther } = JSON.parse(packageData);
  const newPackageData = {
    ...packageDataOther,
    main: './index.js',
    module: './index.es.js',
    private: false
  };
  const buildPath = path.resolve(__dirname, '../build/package.json');

  await fse.writeFile(buildPath, JSON.stringify(newPackageData, null, 2), 'utf8');
  console.log(`Created package.json in ${buildPath}`);

  return newPackageData;
}

async function prepend(file, string) {
  const data = await fse.readFile(file, 'utf8');
  await fse.writeFile(file, string + data, 'utf8');
}

async function addLicense(packageData) {
  const license = `/** @license Alteryx UI v${packageData.version}
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
`;
  await Promise.all(
    [
      '../build/index.js',
      '../build/index.es.js'
      // '../build/umd/material-ui.development.js',
      // '../build/umd/material-ui.production.min.js',
    ].map(file => prepend(path.resolve(__dirname, file), license))
  );
}

async function run() {
  // await Promise.all(
  // ['../../README.md', '../../CHANGELOG.md', '../../LICENSE'].map(file => copyFile(file)),
  // );
  const packageData = await createPackageFile();
  await addLicense(packageData);

  // TypeScript
  const from = path.resolve(__dirname, '../../../node_modules/@material-ui/lab/es/**/*.d.ts');
  await Promise.all([typescriptCopy(from, path.resolve(__dirname, '../build/es'))]);
}

run();
