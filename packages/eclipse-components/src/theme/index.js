import merge from 'deepmerge';

import { createMuiTheme } from '../styles';

import getUiCoreTheme from './global';
import getUiCoreOverrides from './overrides';
import uiCorePropOverrides from './props/prop-overrides';
import uiCorePalette from './palette';

export default (productTheme, fontFamily, paletteType, locale = undefined) => {
  const cssBaselinOverrides = {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [fontFamily]
      }
    }
  };

  const defaultMuiTheme = createMuiTheme({ palette: uiCorePalette(() => {}) });
  const {
    palette: { augmentColor }
  } = defaultMuiTheme; // TODO: Remove this

  // Use product theme palette type to get correct palette with our theme, then
  // generate a base theme from base MUI theme and the ui-core theme.
  const uiCoreTheme = getUiCoreTheme(augmentColor, paletteType);
  const baseTheme = createMuiTheme(
    merge(uiCoreTheme, {
      typography: {
        fontFamily
      },
      palette: {
        type: paletteType
      }
    }),
    locale
  );

  // Make sure product theme is always a theme object.
  const resolvedProductTheme = typeof productTheme === 'function' ? productTheme(baseTheme) : productTheme;
  if (resolvedProductTheme.palette && typeof resolvedProductTheme.palette.type !== 'undefined') {
    // eslint-disable-next-line no-console
    console.warn(
      'It looks like you are trying to set the palette type on the product theme. Use the "paletteType" prop on the AyxAppWrapper component instead.'
    );
  }

  // Get both UI-Core and Product theme overrides.
  const coreOverrides = getUiCoreOverrides(baseTheme);
  const { overrides: productOverrides } = resolvedProductTheme;
  const { direction } = resolvedProductTheme;

  const mergedOverrides = merge.all([cssBaselinOverrides, coreOverrides, productOverrides || {}]);

  // Reassemble everything.
  const finalTheme = merge.all([baseTheme, { overrides: mergedOverrides, props: uiCorePropOverrides, direction }]);

  return finalTheme;
};
