const MStepper = ({ palette, spacing }) => ({
  root: {
    width: '100%',
    backgroundColor: palette.type === 'dark' ? palette.background.default : undefined,
    padding: spacing(3.5)
  },
  horizontal: {
    height: 44
  },
  alternativeLabel: {
    height: '100%'
  }
});

const MStepContent = ({ spacing, palette }) => ({
  root: {
    marginLeft: spacing(2),
    borderLeft: `1px solid ${palette.divider}`,
    paddingLeft: spacing(4.25)
  },
  last: {
    marginTop: spacing(3)
  },
  transition: {
    paddingBottom: spacing(1)
  }
});

const MStepIcon = theme => ({
  root: {
    fontSize: theme.spacing(5),
    color: theme.palette.blueGrey[500]
  }
});

const MStepConnector = ({ spacing, palette }) => ({
  vertical: {
    marginLeft: spacing(2),
    '&$disabled': {
      '& $line': {
        borderColor: palette.divider,
        height: 20
      }
    },
    '& $line': {
      borderColor: palette.divider,
      minHeight: 20
    }
  },
  horizontal: {
    '&$disabled': {
      '& $line': {
        borderColor: palette.divider
      }
    },
    '& $line': {
      borderColor: palette.divider
    }
  },
  alternativeLabel: {
    top: spacing(2)
  },
  lineVertical: {
    minHeight: 20
  }
});

const MStepLabel = theme => ({
  label: {
    fontSize: theme.typography.pxToRem(13),
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.text.secondary,
    lineHeight: 1.54,
    '&$completed': {
      fontSize: theme.typography.pxToRem(13),
      fontWeight: theme.typography.fontWeightBold,
      lineHeight: 1.54
    },
    '&$active': {
      fontSize: theme.typography.pxToRem(13),
      fontWeight: theme.typography.fontWeightBold,
      lineHeight: 1.54
    },
    '&$alternativeLabel': {
      marginTop: theme.spacing(1)
    }
  },
  labelContainer: {
    '& span + *': {
      marginTop: -2
    }
  }
});

export default theme => ({
  MuiStepper: MStepper(theme),
  MuiStepContent: MStepContent(theme),
  MuiStepLabel: MStepLabel(theme),
  MuiStepIcon: MStepIcon(theme),
  MuiStepConnector: MStepConnector(theme)
});
