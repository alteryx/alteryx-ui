/* eslint-disable complexity */
import { fade } from '../../styles';

const MuiAlert = ({ palette, spacing, typography }) => {
  const standardOpacity = palette.type === 'dark' ? 0.15 : 0.07;
  const outlinedOpacity = palette.type === 'dark' ? 0.2 : 0.07;
  const filledOpacity = palette.type === 'dark' ? 0.08 : 0.12;
  const focusShadow = palette.getFocusedShadowStyle();

  return {
    root: {
      borderRadius: spacing(1),
      fontSize: '.8125rem',
      lineHeight: 1.54,
      padding: spacing(0.5, 2, 0.5, 2.5)
    },
    action: {
      marginRight: 0,
      '& button': {
        paddingLeft: spacing(1),
        paddingRight: spacing(1),
        '& .MuiSvgIcon-root': {
          fontSize: typography.pxToRem(16)
        },
        '&:focus': {
          boxShadow: focusShadow
        }
      },
      '& .MuiDivider-vertical': {
        marginLeft: spacing(2),
        marginRight: spacing(2)
      },
      '& .MuiSvgIcon-root': {
        padding: 1
      }
    },
    icon: {
      padding: spacing(2.75, 0),
      marginRight: spacing(1.5)
    },
    standardInfo: {
      color: palette.type === 'dark' ? palette.info.light : palette.info.dark,
      backgroundColor: fade(palette.info.main, standardOpacity),
      '& .MuiDivider-vertical': {
        backgroundColor: fade(palette.info.main, standardOpacity)
      },
      '& $icon': {
        color: palette.type === 'dark' ? palette.info.light : palette.info.dark
      }
    },
    standardError: {
      color: palette.type === 'dark' ? palette.error.light : palette.error.dark,
      backgroundColor: fade(palette.error.main, standardOpacity),
      '& .MuiDivider-vertical': {
        backgroundColor: fade(palette.error.main, standardOpacity)
      },
      '& $icon': {
        color: palette.type === 'dark' ? palette.error.light : palette.error.dark
      }
    },
    standardWarning: {
      color: palette.type === 'dark' ? palette.warning.light : palette.warning.dark,
      backgroundColor: fade(palette.warning.main, standardOpacity),
      '& .MuiDivider-vertical': {
        backgroundColor: fade(palette.warning.main, standardOpacity)
      },
      '& $icon': {
        color: palette.type === 'dark' ? palette.warning.light : palette.warning.dark
      }
    },
    standardSuccess: {
      color: palette.type === 'dark' ? palette.success.light : palette.success.dark,
      backgroundColor: fade(palette.success.main, standardOpacity),
      '& .MuiDivider-vertical': {
        backgroundColor: fade(palette.success.main, standardOpacity)
      },
      '& $icon': {
        color: palette.type === 'dark' ? palette.success.light : palette.success.dark
      }
    },
    outlinedInfo: {
      padding: spacing(0.25, 2, 0.25, 2.5),
      color: palette.type === 'dark' ? palette.info.light : palette.info.dark,
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: palette.type === 'dark' ? fade(palette.info.main, 0.4) : fade(palette.info.main, 0.15),
      '& .MuiDivider-vertical': {
        backgroundColor: fade(palette.info.main, outlinedOpacity)
      },
      '& $icon': {
        color: palette.type === 'dark' ? palette.info.light : palette.info.dark
      }
    },
    outlinedError: {
      padding: spacing(0.25, 2, 0.25, 2.5),
      color: palette.type === 'dark' ? palette.error.light : palette.error.dark,
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: palette.type === 'dark' ? fade(palette.error.main, 0.4) : fade(palette.error.main, 0.15),
      '& .MuiDivider-vertical': {
        backgroundColor: fade(palette.error.main, outlinedOpacity)
      },
      '& $icon': {
        color: palette.type === 'dark' ? palette.error.light : palette.error.dark
      }
    },
    outlinedWarning: {
      padding: spacing(0.25, 2, 0.25, 2.5),
      color: palette.type === 'dark' ? palette.warning.light : palette.warning.dark,
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: palette.type === 'dark' ? fade(palette.warning.main, 0.4) : fade(palette.warning.main, 0.15),
      '& .MuiDivider-vertical': {
        backgroundColor: fade(palette.warning.main, outlinedOpacity)
      },
      '& $icon': {
        color: palette.type === 'dark' ? palette.warning.light : palette.warning.dark
      }
    },
    outlinedSuccess: {
      padding: spacing(0.25, 2, 0.25, 2.5),
      color: palette.type === 'dark' ? palette.success.light : palette.success.dark,
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: palette.type === 'dark' ? fade(palette.success.main, 0.4) : fade(palette.success.main, 0.15),
      '& .MuiDivider-vertical': {
        backgroundColor: fade(palette.success.main, outlinedOpacity)
      },
      '& $icon': {
        color: palette.type === 'dark' ? palette.success.light : palette.success.dark
      }
    },
    filledInfo: {
      backgroundColor: palette.info.main,
      borderRadius: spacing(1.5),
      '& .MuiDivider-vertical': {
        backgroundColor: fade(palette.common.white, filledOpacity)
      },
      '& $icon': {
        opacity: 0.7
      }
    },
    filledError: {
      backgroundColor: palette.error.main,
      borderRadius: spacing(1.5),
      '& .MuiDivider-vertical': {
        backgroundColor: fade(palette.common.white, filledOpacity)
      },
      '& $icon': {
        opacity: 0.7
      }
    },
    filledWarning: {
      backgroundColor: palette.warning.main,
      borderRadius: spacing(1.5),
      '& .MuiDivider-vertical': {
        backgroundColor: fade(palette.common.white, filledOpacity)
      },
      '& $icon': {
        opacity: 0.7
      }
    },
    filledSuccess: {
      backgroundColor: palette.success.main,
      borderRadius: spacing(1.5),
      '& .MuiDivider-vertical': {
        backgroundColor: fade(palette.common.white, filledOpacity)
      },
      '& $icon': {
        opacity: 0.7
      }
    }
  };
};

const MuiAlertTitle = () => ({
  root: {
    marginTop: 0,
    fontWeight: 600
  }
});

export default theme => ({
  MuiAlert: MuiAlert(theme),
  MuiAlertTitle: MuiAlertTitle()
});
