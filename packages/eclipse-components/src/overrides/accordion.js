const MAccordion = theme => ({
  root: {
    backgroundColor: 'transparent',
    '&$disabled': {
      backgroundColor: 'transparent'
    },
    '&:last-child': {
      '&:after': {
        position: 'absolute',
        left: 0,
        bottom: 0,
        right: 0,
        height: 1,
        content: '""',
        opacity: 1,
        backgroundColor: theme.palette.divider
      }
    },
    '&$expanded': {
      margin: 0,
      '&:last-child': {
        '&:after': {
          display: 'none'
        }
      },
      '&:before': {
        opacity: 1
      }
    },
    '&$expanded + &': {
      '&:before': {
        display: 'auto'
      }
    }
  },
  disabled: {}
});

const MAccordionSummary = theme => ({
  root: {
    padding: `${theme.spacing(3.5)}px ${theme.spacing(3)}px ${theme.spacing(3.5)}px ${theme.spacing(3)}px`,
    minHeight: 12,
    '&$disabled': {
      opacity: 1,
      pointerEvents: 'none'
    },
    '&$disabled svg': {
      opacity: 1,
      color: theme.palette.action.disabled
    },
    '&$disabled p': {
      opacity: 1,
      color: theme.palette.text.disabled,
      fontWeight: 'normal'
    },
    '&$disabled span': {
      color: theme.palette.text.disabled
    },
    '& p': {
      lineHeight: 1
    },
    '&$expanded': {
      minHeight: 24,
      '&:hover': {
        backgroundColor: 'transparent'
      }
    },
    '&:hover': {
      backgroundColor: theme.palette.action.hover
    }
  },
  content: {
    margin: 0,
    '&$expanded': {
      margin: 0
    }
  },
  expandIcon: {
    padding: 0,
    color: theme.palette.action.passive, // Force the icon color to primary
    '&:focus, &:hover': {
      color: theme.palette.action.passive // Remove focus and hover since the panel has the feedback
    },
    height: 16,
    width: 16
  }
});

const MAccordionDetails = ({ spacing }) => ({
  root: {
    padding: spacing(0, 3, 5, 3)
  }
});

const MAccordionActions = theme => ({
  root: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4)
  },
  spacing: {
    padding: theme.spacing(2, 4)
  }
});

export default theme => ({
  MuiAccordion: MAccordion(theme),
  MuiAccordionSummary: MAccordionSummary(theme),
  MuiAccordionDetails: MAccordionDetails(theme),
  MuiAccordionActions: MAccordionActions(theme),
  MuiExpansionPanel: MAccordion(theme),
  MuiExpansionPanelSummary: MAccordionSummary(theme),
  MuiExpansionPanelDetails: MAccordionDetails(theme),
  MuiExpansionPanelActions: MAccordionActions(theme)
});
