import ayxColor from '../ayx-colors';

const MSnackbar = theme => ({
  root: {
    [theme.breakpoints.up('sm')]: {
      borderRadius: '4px'
    },
    margin: theme.spacing(5),
    borderColor: theme.palette.type === 'dark' ? ayxColor['border-dark'] : undefined
  }
});

const MSnackbarContent = theme => ({
  root: {
    [theme.breakpoints.up('sm')]: {
      borderRadius: '4px'
    },
    flexWrap: 'nowrap',
    color: theme.palette.type === 'dark' ? undefined : theme.palette.background.paper,
    backgroundColor: theme.palette.type === 'dark' ? undefined : theme.palette.info.main,
    padding: 0,
    border: 'none',
    ...theme.zDepth.for('snackbarContent')
  },
  message: {
    fontSize: theme.typography.pxToRem(13),
    fontWeight: 'normal',
    lineHeight: 1.54,
    color: theme.palette.type === 'dark' ? undefined : theme.palette.background.paper,
    paddingTop: `${theme.spacing(2.25)}px`,
    paddingBottom: `${theme.spacing(2.75)}px`,
    marginLeft: `${theme.spacing(3.5)}px`,
    marginRight: `${theme.spacing(3.5)}px`
  },
  action: {
    fontSize: theme.typography.pxToRem(13),
    fontWeight: 'normal',
    lineHeight: 1.54,
    color: theme.palette.type === 'dark' ? undefined : theme.palette.background.paper,
    paddingLeft: '0px',
    marginLeft: 'auto',
    marginRight: '0px',
    alignSelf: 'stretch',
    '& button': {
      padding: 0,
      whiteSpace: 'nowrap',
      height: 40,
      minWidth: `${theme.spacing(10)}px`,
      alignSelf: 'center',
      color: theme.palette.type === 'dark' ? undefined : theme.palette.background.paper
    },
    '& button span': {
      padding: 0,
      marginLeft: `${theme.spacing(3.5)}px`,
      marginRight: `${theme.spacing(3.5)}px`
    },
    '& button svg': {
      width: `${theme.spacing(3)}px`,
      height: `${theme.spacing(3)}px`
    }
  }
});

export default theme => ({
  MuiSnackbar: MSnackbar(theme),
  MuiSnackbarContent: MSnackbarContent(theme)
});
