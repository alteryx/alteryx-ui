import { fade } from '../../styles';
import ayxColor from '../ayx-colors';

const MInput = theme => {
  return {
    root: {
      fontSize: theme.typography.pxToRem(13),
      fontWeight: 'normal',
      lineHeight: 'none',
      border: `1px solid`,
      borderColor: theme.palette.type === 'dark' ? ayxColor['border-dark'] : theme.palette.blueGrey[200],
      borderRadius: 4,
      overflow: 'hidden',
      backgroundColor: theme.palette.type === 'dark' ? undefined : theme.palette.background.paper,
      outline: 'none',
      transition: 'border 200ms ease-out',
      '&$focused, &$focused:hover': {
        ...theme.palette.getFocusedStyle()
      },
      '&:hover': {
        borderColor: theme.palette.type === 'dark' ? theme.palette.grey[600] : theme.palette.blueGrey[300]
      },
      '&$disabled': {
        color: theme.palette.text.disabled,
        borderColor: theme.palette.action.disabledBackground,
        backgroundColor: theme.palette.action.disabledBackground,
        '& svg': {
          color: theme.palette.text.disabled
        },
        '&>input': {
          border: 'none !important'
        }
      },
      '&$error': {
        borderColor: theme.palette.error.main,
        boxShadow: 'none'
      }
    },
    input: {
      padding: '4px 8px',
      fontSize: 13,
      lineHeight: '20px',
      height: '20px',
      '&::placeholder': {
        transition: 'color 200ms ease-out',
        color: theme.palette.text.secondary
      },
      '$focused &': {
        '&::placeholder': {
          color: theme.palette.type === 'light' ? theme.palette.blueGrey[500] : theme.palette.grey[600]
        }
      }
    },
    inputTypeSearch: {
      '&::-webkit-search-cancel-button': {
        display: 'none'
      }
    },
    inputMultiline: {
      height: 'auto'
    },
    formControl: {
      'label + &': {
        marginTop: 0
      }
    }
  };
};

const MFilledInput = theme => {
  return {
    root: {
      fontSize: theme.typography.pxToRem(13),
      fontWeight: 'normal',
      lineHeight: 'none',
      borderRadius: 3,
      overflow: 'hidden',
      outline: 'none',
      transition: 'border 200ms ease-out',
      '&$disabled': {
        color: theme.palette.text.disabled,
        borderColor: theme.palette.action.disabledBackground,
        backgroundColor: theme.palette.action.disabledBackground,
        '& svg': {
          color: theme.palette.text.disabled
        },
        '&>input': {
          border: 'none !important'
        }
      },
      border: '1px solid transparent',
      backgroundColor:
        theme.palette.type === 'dark'
          ? fade(theme.palette.blueGrey['300'], 0.08)
          : fade(theme.palette.blueGrey['300'], 0.25),
      '&:hover': {
        backgroundColor:
          theme.palette.type === 'dark'
            ? fade(theme.palette.blueGrey['800'], 0.35)
            : fade(theme.palette.blueGrey['300'], 0.4)
      },
      '&$focused': {
        ...theme.palette.getFocusedStyle(),
        backgroundColor:
          theme.palette.type === 'dark'
            ? fade(theme.palette.blueGrey['800'], 0.2)
            : fade(theme.palette.blueGrey['300'], 0.25)
      },
      '&$error': {
        borderColor: theme.palette.error.main,
        border: '1px solid',
        boxShadow: 'none',
        padding: 0 // Root is using padding instead of a border
      }
    },
    input: {
      padding: '4px 8px',
      fontSize: 13,
      lineHeight: '20px',
      height: '20px',
      '&::placeholder': {
        transition: 'color 200ms ease-out',
        color: theme.palette.text.secondary
      },
      '$focused &': {
        '&::placeholder': {
          color: theme.palette.type === 'light' ? theme.palette.blueGrey[500] : theme.palette.grey[600]
        }
      },
      color: theme.palette.type === 'dark' ? theme.palette.text.secondary : undefined,
      '&$disabled::placeholder': {
        color: theme.palette.text.disabled
      },
      '&::-webkit-search-cancel-button': {
        display: 'none'
      }
    },
    adornedStart: {
      paddingLeft: 0
    },
    adornedEnd: {
      paddingRight: 0
    }
  };
};

const MInputAdornment = ({ palette, spacing, typography }) => ({
  root: {
    color: palette.text.secondary,
    fontSize: typography.pxToRem(13)
  },
  positionStart: {
    marginLeft: spacing(2),
    marginRight: spacing(2),
    '& svg': {
      color: palette.action.passive
    }
  },
  positionEnd: {
    marginLeft: spacing(2),
    marginRight: spacing(2),
    '& svg': {
      color: palette.action.passive
    }
  },
  filled: {
    '&$positionStart:not($hiddenLabel)': {
      marginTop: 0 // Undo MUI specific filled style
    }
  }
});

const MInputLabel = theme => ({
  root: {
    left: 10,
    position: 'relative'
  },
  formControl: {
    // retaining the native relative-absolute parent/child scheme, mimic left-padding
    left: 8,
    transform: 'translate(0, 0px) scale(1)', // reset from default: 'translate(0, 24px) scale(1)',
    color: theme.palette.text.secondary,
    fontWeight: 600,
    fontSize: theme.typography.pxToRem(13),
    lineHeight: '15px',
    userSelect: 'none',
    position: 'relative'
  },
  shrink: {
    transform: 'translate(-8px, -4px) ', // default: 'translate(0, 1.5px) scale(0.75)'
    color: theme.palette.text.secondary,
    fontWeight: 600,
    fontSize: theme.typography.pxToRem(13),
    lineHeight: '15px',
    userSelect: 'none'
  },
  filled: {
    '&$shrink': {
      transform: 'translate(-8px, -4px) scale(1)'
    }
  }
});

const placeholder = theme => ({
  transition: '0.1s color',
  color: theme.palette.text.secondary,
  opacity: 1
});

const focusedPlaceholder = theme => ({
  color: theme.palette.type === 'dark' ? theme.palette.blueGrey[600] : theme.palette.blueGrey[500]
});

const MInputBase = theme => ({
  root: {},
  input: {
    '&::-webkit-input-placeholder': placeholder(theme),
    '&::-moz-placeholder': placeholder(theme), // Firefox 19+
    '&:-ms-input-placeholder': placeholder(theme), // IE 11
    '&::-ms-input-placeholder': placeholder(theme), // Edge
    '&::placeholder': placeholder(theme),
    '&:focus': {
      '&::-webkit-input-placeholder': focusedPlaceholder(theme),
      '&::-moz-placeholder': focusedPlaceholder(theme), // Firefox 19+
      '&:-ms-input-placeholder': focusedPlaceholder(theme), // IE 11
      '&::-ms-input-placeholder': focusedPlaceholder(theme), // Edge
      '&::placeholder': focusedPlaceholder(theme)
    },
    '&$inputAdornedStart': {
      paddingLeft: 0
    },
    '&$inputAdornedEnd': {
      paddingRight: 0
    }
  }
});

const MSelect = ({ palette }) => ({
  select: {
    '&:focus': {
      backgroundColor: undefined
    }
  },
  icon: {
    color: palette.action.passive,
    margin: 5,
    '&$disabled': {
      color: palette.action.disabled
    }
  }
});

export default theme => ({
  MuiFilledInput: MFilledInput(theme),
  MuiFilledInputAdornment: MInputAdornment(theme),
  MuiInput: MInput(theme),
  MuiInputBase: MInputBase(theme),
  MuiInputAdornment: MInputAdornment(theme),
  MuiInputLabel: MInputLabel(theme),
  MuiSelect: MSelect(theme)
});
