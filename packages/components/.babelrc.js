const ENV = process.env.BABEL_ENV;
let defaultPresets;

// We release a ES version of Material-UI.
// It's something that matches the latest official supported features of JavaScript.
// Nothing more (stage-1, etc), nothing less (require, etc).
if (ENV === 'es') {
  defaultPresets = [];
} else {
  defaultPresets = [
    [
      '@babel/preset-env',
      {
        targets: {
          ie: 11,
          edge: 14,
          firefox: 45,
          chrome: 49,
          safari: 10,
          node: 'current',
        },
        modules: ['modules', 'production-umd'].includes(ENV) ? false : 'commonjs',
      },
    ],
  ];
}
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          ie: 11,
          edge: 14,
          firefox: 45,
          chrome: 49,
          safari: 10,
          node: 'current',
        },
        modules: ['modules', 'production-umd'].includes(ENV) ? false : 'commonjs',
      },
    ],
    '@babel/preset-react',
    '@babel/preset-typescript'
  ],
  plugins: [
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    [
      '@babel/plugin-proposal-object-rest-spread',
      {
        // Workaround for https://github.com/babel/babel/issues/8323
        loose: process.env.BABEL_ENV !== 'es',
      },
    ],
    '@babel/plugin-transform-object-assign',
    '@babel/plugin-transform-runtime',
    ["transform-imports", {
      "@ayx/icons\/?(((\\w*)?\/?)*)": {
        "transform": importName => {
          const splitName = importName.split(/(?=[A-Z])/)
          const folderName = splitName !== null ? splitName.join('-').toLocaleLowerCase() : importName.toLocaleLowerCase();
          if (importName.includes('Svg')){
            return `@ayx/icons/svg/${folderName}`;
          }
          return `@ayx/icons/icons/${folderName}`;
        }
      },
      '@material-ui/core': {
        'transform': '@material-ui/core/${member}',
        'preventFullImport': true
      },
    }],
  ],
  env: {
    development: {
      plugins: [
        [
          'module-resolver',
          {
            alias: {
              modules: './modules',
            },
          },
        ],
      ],
    },
    es: {
      plugins: [
        'transform-react-constant-elements',
        'transform-dev-warning',
        ['react-remove-properties', { properties: ['data-mui-test'] }],
        [
          'transform-react-remove-prop-types',
          {
            mode: 'wrap',
          },
        ],
      ],
      // It's most likely a babel bug.
      // We are using this ignore option in the CLI command but that has no effect.
      ignore: ['**/*.test.js'],
    },
    production: {
      plugins: [
        'transform-react-constant-elements',
        'transform-dev-warning',
        ['react-remove-properties', { properties: ['data-mui-test'] }],
        [
          'transform-react-remove-prop-types',
          {
            mode: 'wrap',
          },
        ],
      ],
      // It's most likely a babel bug.
      // We are using this ignore option in the CLI command but that has no effect.
      ignore: ['**/*.test.js'],
    }
  },
  ignore: ['scripts/*.js'],
};