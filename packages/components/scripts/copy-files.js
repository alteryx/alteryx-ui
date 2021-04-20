/* eslint-disable */
const path = require('path');
const fse = require('fs-extra');
const glob = require('glob');

const [copySource, copyTarget, ...copySourceExclusions] = process.argv.slice(2);

// to avoid iterating, structuring this as an object: { <folder name>: { <file1>: true, <file2>: true } }
const blacklist = {
  src: {
    'index.d.ts': true,
    'index.js': true,
  }
};

const parseFiles = file => {
  let parsed = path.parse(path.normalize(file));
  let parsedPath = parsed.dir.split(path.sep);
  let folder = parsedPath[parsedPath.length - 1];

  return {
    parsed,
    folder,
    fullPath: file
  }
}

const removeBlacklisted = bl => ({parsed, folder}) => {
  const blacklistMatch = bl[folder] && bl[folder][parsed.base] || false;
  return !blacklistMatch
}

const typescriptCopy = (from, to, exclusions) => {
	const buildIgnore = excl => {
		const l = excl.length;
		if (l === 0 || typeof excl === 'undefined') return '';
		if (l === 1) return `**/${excl[0]}/**`;
		if (l > 1) return `**/{${excl.join(', ')}}/**`
  }

  const files = glob.sync(from, {
    ignore: buildIgnore(exclusions),
    cwd: from
  }).map(parseFiles)
    .filter(removeBlacklisted(blacklist));
  const cmds = files.map(({ parsed, folder, fullPath }) => {
    if (folder === 'src') return;
    const toFolder = `${to}/${folder}`;
    const fileName = parsed.base;

    const copySource = path.resolve(fullPath)
    const copyTarget = path.resolve(__dirname, toFolder, fileName)

    fse.copy(copySource, copyTarget);
  });

  return Promise.all(cmds);
}

const toAbs = relPath => path.normalize(path.resolve(__dirname, relPath));

const run = async () => {
  if (!copySource) {
    console.error('ERROR: copy-files.js script requires a copy source glob pattern as first command line arg.');
    return;
  }

  if (!copyTarget) {
    console.error('ERROR: copy-files.js script requires a copy target directory path as second command line arg.');
    return;
  }

  await Promise.all([
    typescriptCopy(toAbs(copySource), toAbs(copyTarget), copySourceExclusions)
  ]);
}

run();
