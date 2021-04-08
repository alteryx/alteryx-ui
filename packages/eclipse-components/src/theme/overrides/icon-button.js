const hoverOpacity = 0.4; // We should consider changing palette.action.hoverOpacity

const MIconButton = ({ palette, spacing }) => ({
  root: {
    // color: MUI defaults to action.active
    // Animate changing variants
    borderRadius: spacing(1), // match Button border radius
    padding: spacing(1),
    '&:focus, &:hover': {
      backgroundColor: 'transparent'
    },
    '&:active': {
      color: palette.primary.dark
    }
  },
  colorPrimary: {
    '&:focus, &:hover': {
      backgroundColor: 'transparent'
    },
    '&:active': {
      color: palette.primary.dark
    }
  },
  colorSecondary: {
    '&:focus, &:hover': {
      backgroundColor: 'transparent'
    },
    '&:active': {
      color: palette.secondary.dark
    }
  },
  colorInherit: {
    '&:focus, &:hover': {
      opacity: 1 - hoverOpacity
    }
  },
  edgeEnd: {
    marginRight: -spacing(1),
    '$sizeSmall&': {
      marginRight: -spacing(1)
    }
  },
  edgeStart: {
    marginLeft: -spacing(1),
    '$sizeSmall&': {
      marginLeft: -spacing(1)
    }
  },
  sizeSmall: {
    padding: spacing(1)
  }
});

export default theme => ({
  MuiIconButton: MIconButton(theme)
});
