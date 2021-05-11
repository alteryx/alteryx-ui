const path = require('path');
const fse = require('fs-extra');

const copySource = path.resolve(__dirname, '../src/theme/props/prop-overrides.js')

const data = fse.readFileSync(copySource, 'utf-8');
const cleanAyxName = data.replace(/@ayx\/ui-core(?:-lab)?/g, '@alteryx/ui');
const cleanIconsName = cleanAyxName.replace('@ayx/icons', '@alteryx/icons');
const cleanImportStatements = cleanIconsName.replace(`import { dataUICMaker } from '@alteryx/ui';`, `import { dataUICMaker } from '../utils';`) 
fse.writeFileSync(copySource, cleanImportStatements, 'utf-8');