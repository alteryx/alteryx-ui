// Doing this crap because we can't currently publish without doing it. When we handle the tech debt of
// cleaning up our packages, this should be refactored away from and deleted.

const path = require('path');
const fse = require('fs-extra');

const source = path.resolve(__dirname, '../package.json')
const target = path.resolve(__dirname, '../build/package.json')

fse.copy(source, target)
