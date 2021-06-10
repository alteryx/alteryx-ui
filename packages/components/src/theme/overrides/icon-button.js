const hoverOpacity = 0.4; // We should consider changing palette.action.hoverOpacity

const MIconButton = ({ palette, spacing }) => ({
  root: {
    // color: MUI defaults to action.active
    // Animate changing variants
    borderRadius: spacing(1), // match Button border radius
    padding: spacing(1),
    '&:hover': {
      backgroundColor: 'transparent',
      color: palette.primary.light
    },
    '&:active': {
      color: palette.primary.dark
    }
  },
  colorPrimary: {
    '&:hover': {
      backgroundColor: 'transparent',
      color: palette.primary.light
    },
    '&:active': {
      color: palette.primary.dark
    }
  },
  colorSecondary: {
    '&:hover': {
      backgroundColor: 'transparent',
      color: palette.secondary.light
    },
    '&:active': {
      color: palette.secondary.dark
    }
  },
  colorInherit: {
    '&:hover': {
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
