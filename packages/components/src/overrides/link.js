const MuiLink = theme => {
  return {
    // This does not match Material's css api for Link, however
    // when focusVisible is used it affects the focus states
    // for other components using buttons NOT overriding that class (Tab, RadioGroup, etc.)
    root: {
      '&$focusVisible': {
        borderRadius: 4,
        outline: 'none',
        boxShadow: theme.palette.getFocusedShadowStyle()
      }
    },
    button: {
      '&$focusVisible': {
        borderRadius: 4,
        boxShadow: theme.palette.getFocusedShadowStyle(),
        outline: 'none'
      }
    }
  };
};

export default theme => ({
  MuiLink: MuiLink(theme)
});
