const MTabs = ({ palette, spacing }) => ({
  root: {
    backgroundColor: 'transparent',
    borderBottom: '1px solid',
    borderBottomColor: palette.divider,
    minHeight: 44
  },
  indicator: {
    backgroundColor: palette.primary.main,
    height: spacing(0.25),
    '$vertical &': {
      width: spacing(0.25)
    }
  },
  scrollButtons: {
    color: palette.action.passive,
    '&.Mui-disabled': {
      opacity: 0.4
    },
    '& svg': {
      fontSize: 16
    }
  }
});

const MTab = theme => ({
  root: {
    fontSize: theme.typography.pxToRem(13), // original-> fontSize: theme.typography.pxToRem(14),
    fontWeight: theme.typography.fontWeightBold,
    minHeight: 44,
    minWidth: 0,
    padding: `0px ${theme.spacing(2)}px`,
    whiteSpace: 'normal',
    '@media (min-width:600px)': {
      minWidth: 0
    },
    '&:hover': {
      color: theme.palette.primary.main
    },
    '&$selected': {
      // "Active" state
      color: theme.palette.primary.main
    },
    '&:active': {
      // "Pressed" state
      color: theme.palette.action.active
    },
    '&$disabled': {
      color: theme.palette.text.disabled
    },
    '&:focus': {
      color: theme.palette.primary.main
    }
  },
  textColorInherit: {
    color: theme.palette.text.secondary,
    fontWeight: 'bold',
    opacity: 1
  }
});

export default theme => ({
  MuiTabs: MTabs(theme),
  MuiTab: MTab(theme)
});
