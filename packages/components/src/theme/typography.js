const fontSize = 14; // material default
const htmlFontSize = 16; // browser default
const coef = fontSize / 14;

export function pxToRem(value) {
  return `${(value / htmlFontSize) * coef}rem`;
}

/** ********************** DEPRICATED TYPOGRAPHY STYLE KEYS ************************ */
// The following function should be removed with the next major release (v4.x.x).

const getDepricatedOverrides = (palette, baseVariants) => {
  const variantSize = {
    regular: {
      fontSize: pxToRem(13),
      fontWeight: 'normal',
      lineHeight: 1.54
    },
    small: {
      fontSize: pxToRem(12),
      fontWeight: 'normal',
      lineHeight: 1.33
    }
  };

  const inactiveVariants = {
    h3Inactive: {
      ...baseVariants.h3,
      fontWeight: 'normal'
    },
    h4Inactive: {
      ...baseVariants.h4,
      fontWeight: 'normal'
    },
    h5Inactive: {
      ...baseVariants.h5,
      fontWeight: 'normal'
    }
  };

  const descriptionVariants = {
    h4Description: {
      ...baseVariants.h4,
      color: palette.text.disabled
    },
    h5Description: {
      ...baseVariants.h5,
      color: palette.text.disabled
    },
    regularDescription: {
      ...variantSize.regular,
      color: palette.text.disabled
    },
    smallDescription: {
      ...variantSize.small,
      color: palette.text.disabled
    }
  };

  const hyperlinkVariants = {
    h2Hyperlink: {
      ...baseVariants.h2,
      color: palette.primary.main
    },
    h3Hyperlink: {
      ...baseVariants.h3,
      color: palette.primary.main
    },
    h4Hyperlink: {
      ...baseVariants.h4,
      color: palette.primary.main
    },
    h5Hyperlink: {
      ...baseVariants.h5,
      color: palette.primary.main
    },
    regularHyperlink: {
      ...variantSize.regular,
      color: palette.primary.main
    },
    smallHyperlink: {
      ...variantSize.small,
      color: palette.primary.main
    }
  };

  const darkVariants = {
    h2Dkbg: {
      ...baseVariants.h2
    },
    h3Dkbg: {
      ...baseVariants.h3
    },
    h4Dkbg: {
      ...baseVariants.h4
    }
  };

  const customVariants = {
    regularSemibold: {
      ...variantSize.regular,
      fontWeight: 600
    },
    smallSemibold: {
      ...variantSize.small,
      fontWeight: 600
    },
    dialogTitle: {
      fontSize: pxToRem(14),
      lineHeight: 'normal',
      fontWeight: 600
    },
    label: {
      color: palette.text.secondary,
      fontWeight: 600,
      fontSize: pxToRem(13),
      lineHeight: '15px',
      userSelect: 'none',
      marginBottom: 4
    }
  };

  const inputVariants = {
    inputTypedText: {
      ...variantSize.regular,
      lineHeight: 'none'
    },
    inputLabel: {
      ...customVariants.label
    },
    inputHelperText: {
      ...descriptionVariants.smallDescription,
      lineHeight: 'none'
    },
    inputPlaceholder: {
      ...descriptionVariants.regularDescription,
      lineHeight: 'none'
    }
  };

  return {
    ...variantSize,
    ...inactiveVariants,
    ...descriptionVariants,
    ...hyperlinkVariants,
    ...darkVariants,
    ...customVariants,
    ...inputVariants
  };
};

export default palette => {
  const baseOverrides = {
    h1: {
      fontSize: pxToRem(20),
      fontWeight: 900,
      lineHeight: 1.17
    },

    h2: {
      fontSize: pxToRem(16),
      fontWeight: 700,
      lineHeight: 1.2
    },
    h3: {
      fontSize: pxToRem(14),
      fontWeight: 700,
      lineHeight: 1.17
    },
    h4: {
      fontSize: pxToRem(14),
      fontWeight: 700,
      lineHeight: 1.24
    },
    h5: {
      fontSize: pxToRem(13),
      fontWeight: 700,
      lineHeight: 1.33
    },
    h6: {
      fontSize: pxToRem(12),
      fontWeight: 700,
      lineHeight: 1.6
    },
    subtitle1: {
      fontSize: pxToRem(13),
      fontWeight: 700,
      color: palette.text.secondary,
      lineHeight: 1.46
    },
    subtitle2: {
      fontSize: pxToRem(12),
      fontWeight: 400,
      lineHeight: 1.33,
      color: palette.text.secondary
    },
    body1: {
      fontSize: pxToRem(13),
      fontWeight: 400,
      lineHeight: 1.5
    },
    body2: {
      fontSize: pxToRem(13),
      fontWeight: 400,
      lineHeight: 1.5
    },
    caption: {
      fontSize: pxToRem(13),
      lineHeight: 1.15,
      userSelect: 'none'
    },
    button: {
      color: palette.text.primary,
      fontSize: pxToRem(13),
      fontWeight: 400,
      lineHeight: 1.15,
      textTransform: 'none'
    },
    overline: {
      color: palette.text.secondary,
      fontSize: pxToRem(12),
      fontWeight: 700,
      lineHeight: 1.25,
      letterSpacing: 0.2
    }
  };

  return {
    ...baseOverrides,
    ...getDepricatedOverrides(palette, baseOverrides)
  };
};
