import { fade } from '../../styles';
import ayxColor from '../ayx-colors';

/* eslint-disable complexity */
const MButton = ({ palette, typography, zDepth, spacing }) => {
  const darkMode = palette.type === 'dark';
  const focusShadow = palette.getFocusedShadowStyle();

  return {
    root: {
      border: '1px solid',
      borderColor: 'transparent', // A border is added in some states (e.g hover) setting this now makes that easier
      borderRadius: spacing(1), // Slightly smaller border radius
      minHeight: 0, // Do not enforce min hotspots (will need this when touch screens are supported)
      minWidth: 0, // Do not enforce min hotspots (will need this when touch screens are supported)
      height: 30,
      padding: `${spacing(1.25)}px ${spacing(3)}px ${spacing(1.5)}px ${spacing(3)}px`,
      textTransform: 'none', // Do not force uppercase
      transition: palette.getFocusTransitions(),
      ...zDepth.for('button')
    },
    label: {
      '& > svg': {
        marginTop: spacing(0.5)
      }
    },
    colorInherit: {
      color: 'inherit',
      border: 'none',
      '&$focusVisible, &:hover': {
        color: 'inherit',
        opacity: 0.6
      }
    },

    text: {
      backgroundColor: 'transparent', // Remove background
      boxShadow: 'none',
      fontSize: typography.pxToRem(13),
      fontWeight: 'normal',
      lineHeight: 1.54,
      padding: '4px 12px 6px 12px', // Make button more dense

      '&:not($disabled) $startIcon, &:not($disabled) $endIcon': {
        color: palette.action.active
      },

      '&$focusVisible': {
        boxShadow: focusShadow
      },

      '&:hover': {
        backgroundColor: 'transparent',
        color: palette.primary.light,

        '& $startIcon, & $endIcon': {
          color: 'inherit'
        }
      },

      '&:active, &:active:hover': {
        color: palette.primary.dark,

        '& $startIcon, & $endIcon': {
          color: 'inherit'
        }
      }
    },

    textSecondary: {
      backgroundColor: 'transparent',

      '&$focusVisible': {
        boxShadow: focusShadow
      },

      '&:hover': {
        backgroundColor: 'transparent',
        color: palette.secondary.light
      },

      '&:active': {
        // When the button is clicked
        color: palette.secondary.dark
      }
    },

    textPrimary: {
      color: darkMode ? palette.primary.light : palette.primary.main,

      '&:not($disabled) $startIcon, &:not($disabled) $endIcon': {
        color: 'inherit'
      },

      '&$disabled': {
        backgroundColor: 'transparent'
      },

      '&$focusVisible': {
        boxShadow: focusShadow
      },

      '&:hover': {
        backgroundColor: 'transparent',
        color: darkMode ? palette.primary.main : palette.primary.light,

        '& $startIcon, & $endIcon': {
          color: 'inherit'
        }
      },

      '&:active': {
        // When the button is clicked
        color: palette.primary.dark
      }
    },

    contained: {
      backgroundColor: fade(palette.blueGrey[300], darkMode ? 0.08 : 0.2),
      boxShadow: 'none',
      color: palette.text.primary,
      fontSize: typography.pxToRem(13),
      fontWeight: 'normal',
      lineHeight: 1.54,
      padding: '4px 12px 6px 12px', // Make buttons dense

      '&:not($disabled) $startIcon, &:not($disabled) $endIcon': {
        color: palette.action.active
      },

      '&$focusVisible': {
        boxShadow: focusShadow
      },

      '&:hover': {
        boxShadow: 'none',
        backgroundColor: fade(palette.blueGrey[300], 0.4)
      },

      '&:active': {
        boxShadow: 'none',
        backgroundColor: darkMode ? 'rgba(115, 153, 255, .16)' : fade(palette.primary.main, 0.12),
        color: darkMode ? palette.text.secondary : palette.primary.dark,

        '& $startIcon, & $endIcon': {
          color: 'inherit'
        }
      }
    },

    containedSecondary: {
      color: palette.getContrastText(palette.primary.light),

      '&:not($disabled) $startIcon, &:not($disabled) $endIcon': {
        color: palette.blueGrey['50']
      },

      '&$focusVisible': {
        boxShadow: focusShadow
      },

      '&:hover': {
        backgroundColor: palette.secondary.light
      },

      '&:active': {
        backgroundColor: palette.secondary.dark,
        color: palette.getContrastText(palette.secondary.dark)
      }
    },

    containedPrimary: {
      '&$disabled': {
        backgroundColor: palette.action.disabledBackground
      },

      '&:not($disabled) $startIcon, &:not($disabled) $endIcon': {
        color: palette.blueGrey[50]
      },

      '&$focusVisible': {
        boxShadow: focusShadow
      },

      '&:hover': {
        backgroundColor: palette.primary.light
      },

      '&:active': {
        backgroundColor: palette.primary.dark,
        color: palette.getContrastText(palette.primary.main)
      }
    },

    outlined: {
      backgroundColor: 'transparent',
      boxShadow: 'none',
      fontSize: typography.pxToRem(13),
      fontWeight: 'normal',
      lineHeight: 1.54,
      padding: '4px 12px 6px 12px',

      '&:not($disabled) $startIcon, &:not($disabled) $endIcon': {
        color: palette.action.active
      },

      '&$disabled': {
        borderColor: darkMode ? palette.action.disabledBackground : fade(palette.blueGrey[300], 0.5)
      },

      '&$focusVisible': {
        boxShadow: focusShadow,
        borderColor: palette.blueGrey[500]
      },

      '&:hover': {
        backgroundColor: 'transparent',
        borderColor: palette.blueGrey[500]
      },

      '&:active': {
        backgroundColor: darkMode ? fade(palette.blueGrey[300], 0.05) : fade(palette.blueGrey[500], 0.05),
        borderColor: darkMode ? palette.blueGrey[500] : palette.blueGrey[600]
      }
    },

    outlinedSecondary: {
      '&$disabled': {
        borderColor: darkMode ? palette.action.disabledBackground : fade(palette.blueGrey[300], 0.5)
      },

      '&$focusVisible': {
        boxShadow: focusShadow,
        borderColor: palette.primary.light
      },

      '&:hover': {
        backgroundColor: 'transparent',
        borderColor: palette.secondary.light
      },

      '&:active': {
        backgroundColor: fade(palette.secondary.main, 0.05),
        borderColor: palette.secondary.dark,
        color: palette.secondary.dark
      }
    },

    outlinedPrimary: {
      borderColor: fade(palette.primary.main, 0.5),
      color: darkMode ? palette.primary.light : palette.primary.main,

      '&:not($disabled) $startIcon, &:not($disabled) $endIcon': {
        color: 'inherit'
      },

      '&$disabled': {
        backgroundColor: 'transparent',
        borderColor: darkMode ? palette.action.disabledBackground : fade(palette.blueGrey[300], 0.5)
      },

      '&$focusVisible': {
        borderColor: fade(palette.primary.main, 0.3),
        boxShadow: focusShadow
      },

      '&:hover': {
        backgroundColor: 'transparent',
        borderColor: palette.primary.light
      },

      '&:active': {
        backgroundColor: fade(palette.primary.main, darkMode ? 0.1 : 0.05),
        borderColor: darkMode ? palette.primary.light : palette.primary.dark,
        color: darkMode ? palette.primary.light : palette.primary.dark
      }
    },

    startIcon: {
      marginRight: spacing(1.5),
      marginLeft: -spacing(0.5),
      marginTop: spacing(0.5),
      '&$iconSizeSmall': {
        marginRight: spacing(1),
        marginLeft: -spacing(0.25),
        marginTop: spacing(0.25)
      },
      '&$iconSizeLarge': {
        marginRight: spacing(2),
        marginLeft: -spacing(0.5)
      }
    },
    endIcon: {
      marginRight: -spacing(0.5),
      marginLeft: spacing(1.5),
      marginTop: spacing(0.5),
      '&$iconSizeSmall': {
        marginRight: -spacing(0.25),
        marginLeft: spacing(1),
        marginTop: spacing(0.25)
      },
      '&$iconSizeLarge': {
        marginRight: -spacing(0.5),
        marginLeft: spacing(2)
      }
    },

    sizeSmall: {
      height: 22,
      lineHeight: 1.1,
      borderRadius: spacing(1),
      padding: `${spacing(0.75)}px ${spacing(2)}px ${spacing(1)}px ${spacing(2)}px`
    },

    sizeLarge: {
      height: 40,
      borderRadius: spacing(1.5),
      padding: `${spacing(1)}px ${spacing(4)}px ${spacing(1.5)}px ${spacing(4)}px`
    }
  };
};

const MButtonGroup = theme => ({
  contained: {
    boxShadow: 'none',
    '&:focus': {
      boxShadow: 'none'
    }
  },

  groupedContained: {
    '&:focus': {
      boxShadow: 'none'
    },
    '&:not(:last-child)': {
      borderColor: 'transparent'
    }
  },

  groupedContainedHorizontal: {
    '&:not(:last-child)': {
      borderRight: 'none',
      marginRight: '1px'
    }
  },

  groupedContainedVertical: {
    '&:not(:last-child)': {
      borderBottom: 'none',
      marginBottom: '1px'
    }
  },

  groupedContainedPrimary: {
    '&:not(:last-child)': {
      borderColor: 'transparent'
    }
  },

  groupedContainedSecondary: {
    '&:not(:last-child)': {
      borderColor: 'transparent'
    }
  },

  groupedOutlined: {},

  groupedOutlinedHorizontal: {
    '&:focus': {
      boxShadow: 'none'
    },
    '&:not(:last-child)': {
      borderRightColor: 'transparent'
    },
    '&:hover': {
      // This strange override makes the next adjacent sibling button have a transparent left border because,
      // for some reason, on Primary groups, the adjacent border overlaps its previous sibling's...
      '& + $groupedOutlinedPrimary': {
        borderLeftColor: 'transparent'
      },
      borderColor: theme.palette.type === 'dark' ? ayxColor['border-dark'] : fade('rgba(0, 0, 0, 0.23)', 0.5)
    }
  },

  groupedOutlinedVertical: {
    '&:focus': {
      boxShadow: 'none'
    },
    '&:not(:last-child)': {
      borderBottomColor: 'transparent'
    },
    '&:hover': {
      // This strange override makes the next adjacent sibling button have a transparent top border because,
      // for some reason, on Primary groups, the adjacent border overlaps its previous sibling's...
      '& + $groupedOutlinedPrimary': {
        borderTopColor: 'transparent'
      },
      borderColor: theme.palette.type === 'dark' ? ayxColor['border-dark'] : fade('rgba(0, 0, 0, 0.23)', 0.5)
    }
  },

  groupedOutlinedPrimary: {
    '&:focus': {
      boxShadow: 'none'
    },
    '&$disabled': {
      borderColor: theme.palette.blueGrey[200]
    },
    '&:hover': {
      borderColor: theme.palette.blueGrey[500]
    }
  }
});

export default theme => ({
  MuiButton: MButton(theme),
  MuiButtonGroup: MButtonGroup(theme)
});
