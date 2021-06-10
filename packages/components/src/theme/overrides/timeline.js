const MTimelineConnector = ({ palette }) => ({
  root: {
    width: 1,
    backgroundColor: palette.divider
  }
});

const MTimelineDot = ({ palette }) => ({
  root: {
    boxShadow: 'none'
  },
  defaultGrey: {
    backgroundColor: palette.blueGrey[500]
  }
});

const MTimelineContent = ({ spacing }) => ({
  root: {
    padding: spacing(1, 3, 1.5, 3)
  }
});

const MTimelineItem = ({ spacing }) => ({
  missingOppositeContent: {
    '&::before': {
      padding: spacing(1.5, 3)
    }
  }
});

const MTimelineOppositeContent = ({ spacing }) => ({
  root: {
    padding: spacing(1.5, 3)
  }
});

export default theme => ({
  MuiTimelineConnector: MTimelineConnector(theme),
  MuiTimelineDot: MTimelineDot(theme),
  MuiTimelineContent: MTimelineContent(theme),
  MuiTimelineItem: MTimelineItem(theme),
  MuiTimelineOppositeContent: MTimelineOppositeContent(theme)
});
