const MDialog = theme => ({
  paper: {
    ...theme.zDepth.for('dialog'),
    border: 'none'
  }
});

const MDialogTitle = theme => ({
  root: {
    '& h2': {
      fontSize: theme.typography.pxToRem(14),
      lineHeight: 'normal',
      fontWeight: 600,
      color: theme.palette.getContrastText(theme.palette.primary.main)
    },
    padding: theme.spacing(3.5, 5),
    '& h6': {
      fontSize: theme.typography.pxToRem(14),
      lineHeight: 'normal',
      fontWeight: 600,
      color: theme.palette.getContrastText(theme.palette.primary.main)
    },
    backgroundColor: theme.palette.type === 'dark' ? theme.palette.blueGrey[700] : theme.palette.primary.main
  }
});

const MDialogContent = ({ spacing }) => ({
  root: {
    padding: spacing(5),
    '&:first-child': {
      paddingTop: 24
    }
  }
});

const MDialogContentText = ({ palette, typography }) => ({
  root: {
    color: palette.text.primary,
    fontSize: typography.pxToRem(13),
    fontWeight: 'normal',
    lineHeight: 1.54,
    marginBottom: 0,
    opacity: 1
  }
});

const MDialogActions = ({ spacing }) => ({
  root: {
    margin: 0,
    padding: spacing(0, 5, 5, 5)
  },
  spacing: {
    margin: 0
  }
});

export default theme => ({
  MuiDialog: MDialog(theme),
  MuiDialogTitle: MDialogTitle(theme),
  MuiDialogContent: MDialogContent(theme),
  MuiDialogContentText: MDialogContentText(theme),
  MuiDialogActions: MDialogActions(theme)
});
