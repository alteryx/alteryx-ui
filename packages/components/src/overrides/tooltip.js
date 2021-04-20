const tooltipPlacementMargin = theme => ({
  topOrBottom: {
    margin: `${theme.spacing(1)}px 0`,
    [theme.breakpoints.up('sm')]: {
      margin: `${theme.spacing(1)}px 0`
    }
  },
  leftOrRight: {
    margin: `0 ${theme.spacing(1)}px`,
    [theme.breakpoints.up('sm')]: {
      margin: `0 ${theme.spacing(1)}px`
    }
  }
});

const MTooltip = theme => ({
  arrow: {
    color: theme.palette.type === 'dark' ? theme.palette.blueGrey[700] : theme.palette.brand.deepSpace
  },
  tooltip: {
    fontSize: theme.typography.pxToRem(12),
    fontWeight: 'normal',
    lineHeight: 1.33,
    backgroundColor: theme.palette.type === 'dark' ? theme.palette.blueGrey[700] : theme.palette.brand.deepSpace,
    color: theme.palette.type === 'dark' ? theme.palette.blueGrey[50] : theme.palette.info.contrastText,
    padding: `4px ${theme.spacing(2)}px`,
    borderRadius: `${theme.spacing(1)}px`,
    borderColor: 'transparent',
    ...theme.zDepth.for('tooltip')
  },
  popper: {
    opacity: 1
  },
  /* Styles applied to the tooltip (label wrapper) element if `placement` contains "left". */
  tooltipPlacementLeft: {
    transformOrigin: 'right center',
    ...tooltipPlacementMargin(theme).leftOrRight,
    '&$tooltipArrow': {
      margin: theme.spacing(0, 2.5)
    },
    '& > .MuiTooltip-arrow': {
      transform: 'scaleY(0.8)',
      marginRight: '-0.68em !important' // to counteract materials calculation of -0.71 which leaves a small gap visible
    }
  },
  /* Styles applied to the tooltip (label wrapper) element if `placement` contains "right". */
  tooltipPlacementRight: {
    transformOrigin: 'left center',
    ...tooltipPlacementMargin(theme).leftOrRight,
    '&$tooltipArrow': {
      margin: theme.spacing(0, 2.5)
    },
    '& > .MuiTooltip-arrow': {
      transform: 'scaleY(0.8)',
      marginLeft: '-0.68em !important' // to counteract materials calculation of -0.71 which leaves a small gap visible
    }
  },
  /* Styles applied to the tooltip (label wrapper) element if `placement` contains "top". */
  tooltipPlacementTop: {
    transformOrigin: 'center bottom',
    ...tooltipPlacementMargin(theme).topOrBottom,
    '&$tooltipArrow': {
      margin: theme.spacing(2.5, 0)
    },
    '& > .MuiTooltip-arrow': {
      transform: 'scaleX(0.8)',
      marginBottom: '-0.68em !important' // to counteract materials calculation of -0.71 which leaves a small gap visible
    }
  },
  /* Styles applied to the tooltip (label wrapper) element if `placement` contains "bottom". */
  tooltipPlacementBottom: {
    transformOrigin: 'center top',
    ...tooltipPlacementMargin(theme).topOrBottom,
    '&$tooltipArrow': {
      margin: theme.spacing(2.5, 0)
    },
    '& > .MuiTooltip-arrow': {
      transform: 'scaleX(0.8)',
      marginTop: '-0.68em !important' // to counteract materials calculation of -0.71 which leaves a small gap visible
    }
  }
});

export default theme => ({
  MuiTooltip: MTooltip(theme)
});
