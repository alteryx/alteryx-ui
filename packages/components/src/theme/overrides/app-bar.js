const MAppBar = theme => ({
  root: {},
  colorDefault: {
    backgroundColor: theme.palette.background.paper
  }
});

export default theme => ({
  MuiAppBar: MAppBar(theme)
});
