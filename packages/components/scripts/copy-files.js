/* eslint-disable */
const path = require('path');
const fse = require('fs-extra');
const glob = require('glob');

const [copySource, copyTarget, ...copySourceExclusions] = process.argv.slice(2);

// to avoid iterating, structuring this as an object: { <folder name>: { <file1>: true, <file2>: true } }
const blocklist = {
  src: {
    'index.d.ts': true,
    'index.js': true,
  }
};

const folderBlockList = {
  utils: 'utils',
  props: 'props',
  Select: 'select',
  test: 'test',
  src: 'src',
  icons: 'icons',
  test: 'test',
  svg: 'svg',
  overrides: 'overrides'
}

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

const removeBlocklisted = bl => ({parsed, folder}) => {
  const blocklistMatch = bl[folder] && bl[folder][parsed.base] || false;
  return !blocklistMatch
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
    .filter(removeBlocklisted(blocklist));

  const cmds = files.map(({ parsed, folder, fullPath }) => {
    if (folderBlockList[folder] || fullPath.includes('test')) return;
    const toFolder = `${to}/${folder}`;
    const fileName = parsed.base;
    const copySource = path.resolve(fullPath);
    const copyTarget = path.resolve(__dirname, toFolder, fileName);
    if (fse.lstatSync(copySource).isFile() && !copyTarget.includes('build')) {
      const data = fse.readFileSync(copySource, 'utf-8');
      const cleanAyxName = data.replace(/@ayx\/ui-core(?:-lab)?/g, '@alteryx/ui');
      const cleanIconsName = cleanAyxName.replace('@ayx/icons', '@alteryx/icons');
      const cleanImportStatements = cleanIconsName.replace(`import { dataUICMaker } from '@alteryx/ui';`, `import { dataUICMaker } from '../utils';`) 
      fse.writeFileSync(copyTarget, cleanImportStatements, 'utf-8');
    } else { 
      fse.copy(copySource, copyTarget);
    }
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
