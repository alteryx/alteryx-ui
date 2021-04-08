const fs = require('fs-extra');
const glob = require('glob');
const camelcase = require('camelcase');
const uppercamelcase = require('uppercamelcase');
const cheerio = require('cheerio');
const prettier = require('prettier');

const path = require('path');

const { deprecationList, deprecationMsg } = require('./deprecationList.js');

const rootDir = path.join(__dirname, '..');

const initialTypeDefinitions = `/// <reference types="react" />
import { ComponentType, SVGAttributes } from 'react';
interface Props extends SVGAttributes<SVGElement> {
  color?: string;
  size?: string | number;
}
type Icon = ComponentType<Props>;
`;

// eslint-disable-next-line handle-callback-err
glob(`${rootDir}/svg/**/**.svg`, (err, icons) => {
  fs.writeFileSync(path.join(rootDir, 'src', 'index.js'), '', 'utf-8');
  fs.writeFileSync(path.join(rootDir, 'src', 'index.d.ts'), initialTypeDefinitions, 'utf-8');

  icons.forEach((i, index) => {
    const svg = fs.readFileSync(i, 'utf-8');
    const id = path.basename(i, '.svg');
    const ComponentName = id === 'github' ? 'GitHub' : uppercamelcase(id);
    const $ = cheerio.load(svg, {
      xmlMode: true
    });
    const fileName = path.basename(i).replace('.svg', '.js');
    const location = path.join(rootDir, 'src/icons', fileName);

    let beingDeprecated = false;
    if (deprecationList.includes(ComponentName)) {
      beingDeprecated = true;
    }

    $('*').each((index, el) => {
      Object.keys(el.attribs).forEach(x => {
        if (x.includes('-')) {
          $(el).attr(camelcase(x), el.attribs[x]).removeAttr(x);
        }
        if (x.includes(':')) {
          $(el)
            .attr(camelcase(x.replace(':', '-')), el.attribs[x])
            .removeAttr(x);
        }
        if ($(el).attr(x) === '#647492' || $(el).attr(x) === '#000000') {
          $(el).attr(x, 'currentColor');
        }
        if (['xmlns', 'xmlns:xlink'].includes(x)) {
          $(el).removeAttr(x);
        }
        // if (x === 'stroke' && $(el).attr(x) !== 'none') {
        //   $(el).attr(x, 'currentColor');
        // }
        // if (x === 'fill' && $(el).attr(x) !== 'none') {
        //   $(el).attr(x, 'currentColor');
        // }
      });

      if (el.name === 'svg') {
        $(el).attr('otherProps', '...');
        $(el).attr('color', 'color');
        $(el).attr('width', 'size');
        $(el).attr('height', 'size');
      }
    });

    let deprecationWarning = '';
    if (beingDeprecated) {
      deprecationWarning = `console.warn('${deprecationMsg(ComponentName)}')`;
    }

    const element = `
      import React from 'react';
      import PropTypes from 'prop-types';

      // Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
      // https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
      // eslint-disable-next-line prefer-arrow-callback
      const ${ComponentName} = React.forwardRef(function ${ComponentName}(props, ref) {
        const { color, size, ...otherProps } = props;
        const variantSizes = {
          xsmall: 12,
          small: 14,
          medium: 16,
          large: 20,
          xlarge: 28,
          xxlarge: 36
        };


        const newSize = !isNaN(parseInt(size, 10))
          ? size
          : variantSizes[size] !== undefined
          ? variantSizes[size]
          : variantSizes['medium'];

        ${deprecationWarning}

        return (
          ${$('svg')
            .toString()
            .replace(new RegExp('<!--(.*)-->', 'gi'), '')
            .replace(new RegExp('mask-[0-9]+', 'gi'), `mask-${index}`)
            .replace(new RegExp('path-[0-9]+', 'gi'), `path-${index}`)
            .replace(new RegExp('<title>[^<]+</title>', 'gi'), '')
            .replace(new RegExp('<desc>[^<]+</desc>', 'gi'), '')
            // Perfoming JSX
            .replace('otherProps="..."', '{...otherProps}')
            .replace('width="size"', 'width={newSize}')
            .replace('height="size"', 'height={newSize}')
            .replace('color="color"', 'fill={color}\nref={ref}')}
        )
      });

      ${ComponentName}.propTypes = {
        color: PropTypes.string,
        size: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.number
        ]),
      }

      ${ComponentName}.defaultProps = {
        color: 'currentColor',
        size: '16',
      }

      // We should try to find a way to not hard-code these properties, if possible.
      ${ComponentName}.name = ${ComponentName}.render.name || '${ComponentName}';

      export default ${ComponentName};
    `;

    const component = prettier.format(element, {
      singleQuote: true,
      trailingComma: 'es5',
      bracketSpacing: true,
      parser: 'babel'
    });

    fs.ensureFileSync(location);
    fs.writeFileSync(location, component, 'utf-8');

    const exportString = `export { default as ${ComponentName} } from './icons/${id}';\r\n`;
    fs.appendFileSync(path.join(rootDir, 'src', 'index.js'), exportString, 'utf-8');

    const exportTypeString = `export const ${ComponentName}: Icon;\n`;
    fs.appendFileSync(path.join(rootDir, 'src', 'index.d.ts'), exportTypeString, 'utf-8');
  });
});
