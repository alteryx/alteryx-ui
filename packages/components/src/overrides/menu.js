const MMenu = () => ({
  paper: {
    borderRadius: 4
  }
});

const MMenuItem = theme => ({
  root: {
    fontSize: theme.typography.pxToRem(13),
    fontWeight: 'normal',
    lineHeight: 1.54,
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(3)
  }
});

export default theme => ({
  MuiMenu: MMenu(),
  MuiMenuItem: MMenuItem(theme)
});
