import { fade } from '../../styles';

const MuiCheckbox = ({ palette, spacing }) => {
  const darkMode = palette.type === 'dark';
  const checkedColor = palette.primary.main;

  return {
    root: {
      padding: spacing(1.5),
      color: darkMode ? palette.blueGrey[600] : palette.blueGrey[300],
      backgroundColor: 'transparent',
      '&:hover': {
        color: palette.blueGrey[500],
        backgroundColor: 'transparent',
        '&$checked': {
          color: checkedColor,
          backgroundColor: 'transparent'
        }
      },
      '&$disabled': {
        backgroundColor: 'transparent',
        color: fade(palette.blueGrey[300], 0.5)
      }
    },
    colorPrimary: {
      '&$checked': {
        '&:hover': {
          color: palette.blueGrey[500],
          backgroundColor: 'transparent'
        }
      }
    },
    colorSecondary: {
      '&$checked': {
        color: checkedColor,
        backgroundColor: 'transparent',
        '&:hover': {
          color: palette.blueGrey[500],
          backgroundColor: 'transparent'
        },
        '&:focus': {
          color: palette.blueGrey[500],
          backgroundColor: 'transparent'
        }
      }
    }
  };
};

export default theme => ({
  MuiCheckbox: MuiCheckbox(theme)
});
