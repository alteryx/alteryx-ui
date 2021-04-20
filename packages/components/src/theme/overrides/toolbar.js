const MToolbar = theme => ({
  regular: {
    [theme.breakpoints.up('sm')]: {
      minHeight: 44
    }
  },
  dense: {
    [theme.breakpoints.up('sm')]: {
      minHeight: 40
    }
  }
});

export default theme => ({
  MuiToolbar: MToolbar(theme)
});
