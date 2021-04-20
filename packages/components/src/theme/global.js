import getPalette from './palette';
import shape from './shape';
import spacing from './spacing';
import getTypography from './typography';
import zDepth from './z-depth';

export default (augmentColor, paletteType) => {
  const palette = getPalette(augmentColor, paletteType);
  return {
    palette,
    shape,
    spacing,
    typography: getTypography(palette || {}),
    zDepth
  };
};
