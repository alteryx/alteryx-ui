import { fade } from '../../styles';

const MFab = ({ palette }) => {
  const darkMode = palette.type === 'dark';
  const focusShadow = palette.getFocusedShadowStyle();
  return {
    root: {
      backgroundColor: darkMode ? '#292D31' : '#EDF1F8',
      color: palette.text.primary,
      '&.Mui-focusVisible': {
        boxShadow: focusShadow
      },
      '&:hover': {
        backgroundColor: fade(palette.blueGrey[300], 0.4)
      },
      '&:active': {
        backgroundColor: darkMode ? 'rgba(115, 153, 255, .16)' : fade(palette.primary.main, 0.12),
        color: darkMode ? palette.text.secondary : palette.primary.dark
      }
    },
    primary: {
      backgroundColor: palette.primary.main,
      color: palette.getContrastText(palette.primary.main),
      '&.Mui-disabled': {
        backgroundColor: palette.action.disabledBackground
      },
      '&.Mui-focusVisible': {
        boxShadow: focusShadow
      },
      '&:hover': {
        backgroundColor: palette.primary.light
      },
      '&:active': {
        backgroundColor: palette.primary.dark,
        color: palette.getContrastText(palette.primary.main)
      }
    },
    secondary: {
      backgroundColor: palette.secondary.main,
      color: palette.getContrastText(palette.primary.light),
      '&.Mui-focusVisible': {
        boxShadow: focusShadow
      },
      '&:hover': {
        backgroundColor: palette.secondary.light
      },
      '&:active': {
        backgroundColor: palette.secondary.dark,
        color: palette.getContrastText(palette.secondary.dark)
      }
    }
  };
};

export default theme => ({
  MuiFab: MFab(theme)
});
