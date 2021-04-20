import ayxColor from '../ayx-colors';
import getTypography from '../typography';

import chip from './chip';

const MAutoComplete = theme => ({
  inputRoot: {
    backgroundColor: theme.palette.background.paper,
    borderColor: theme.palette.type === 'dark' ? ayxColor['border-dark'] : theme.palette.blueGrey['300'],
    '&$focused': {
      borderColor: theme.palette.primary.main,
      boxShadow: theme.palette.getFocusedShadowStyle()
    },
    '&[class*="Mui-error"]': {
      borderColor: theme.palette.error.main,
      '&$focused': {
        boxShadow: `0 0 0 0px ${theme.palette.error.main}`
      }
    },
    '& $input': {
      minWidth: 60
    },
    paddingLeft: theme.spacing(2),
    '&[class*="MuiInput-root"]': {
      paddingBottom: 0,
      '& $input:first-child': {
        padding: 0,
        minHeight: 28,
        '&[class*="MuiInput-inputMarginDense"]': {
          padding: 0,
          minHeight: 20
        }
      },
      '& $input': {
        '&[class*="MuiInput-inputMarginDense"]': {
          padding: theme.spacing(0, 1, 0),
          minHeight: 20
        }
      }
    }
  },
  clearIndicator: {
    color: theme.palette.action.passive,
    paddingRight: 0
  },
  groupLabel: {
    ...getTypography(theme.palette).subtitle1,
    backgroundColor: theme.palette.type === 'dark' ? 'rgba(255, 255, 255, 0.14)' : theme.palette.blueGrey[50],
    padding: theme.spacing(1.75, 3)
  },
  groupUl: {
    '& $option': {
      paddingLeft: theme.spacing(3)
    }
  },
  popupIndicator: {
    color: theme.palette.action.passive,
    paddingRight: theme.spacing(1),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  popupIndicatorOpen: {
    paddingLeft: theme.spacing(1), // material rotates the icon so padding must be switched
    paddingRight: theme.spacing(0.5) // material default
  },
  endAdornment: {
    top: 'calc(50% - 11px)', // Center vertically
    paddingRight: theme.spacing(2)
  },
  paper: {
    margin: 0,
    borderRadius: theme.spacing(1),
    borderColor: theme.palette.type === 'dark' ? ayxColor['border-dark'] : theme.palette.blueGrey['300']
  },
  popper: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  popperDisablePortal: {
    marginTop: -theme.spacing(1)
  },
  listbox: {
    border: '1px solid',
    borderColor: theme.palette.type === 'dark' ? ayxColor['border-dark'] : theme.palette.blueGrey['300'],
    borderRadius: theme.spacing(1),
    padding: 0,
    '&:first-child': {
      paddingTop: theme.spacing(1)
    },
    '&:first-child $groupLabel': {
      marginTop: -theme.spacing(1)
    },
    '&:last-child': {
      paddingBottom: theme.spacing(1)
    },
    '& li:last-child': {
      '& $groupUl': {
        marginBottom: -theme.spacing(1)
      }
    }
  },
  option: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    height: 32
  },
  tag: {
    ...chip(theme),
    margin: theme.spacing(1, 0.75, 1, 0)
  },
  tagSizeSmall: {
    margin: 1
  }
});

export default theme => ({
  MuiAutocomplete: MAutoComplete(theme)
});
