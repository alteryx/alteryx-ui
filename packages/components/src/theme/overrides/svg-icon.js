const MuiSvgIcon = ({ typography }) => ({
  root: {
    fontSize: typography.pxToRem(14)
  },
  fontSizeSmall: {
    fontSize: typography.pxToRem(12)
  }
});

export default theme => ({
  MuiSvgIcon: MuiSvgIcon(theme)
});
