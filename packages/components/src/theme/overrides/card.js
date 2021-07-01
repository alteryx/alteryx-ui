const HEADER_HEIGHT = 54;

const MCard = ({ palette, spacing }) => ({
  root: {
    borderRadius: 6,
    border: '1px solid',
    borderColor: palette.type === 'dark' ? palette.background.paper : palette.blueGrey[200],
    // Alter card content if in a card preceded by a header and divider
    '& .MuiCardHeader-root + .MuiDivider-root + .MuiCardContent-root': {
      paddingTop: spacing(4)
    },
    // Alter card content if in a card preceded by a header
    '& .MuiCardHeader-root + .MuiCardContent-root': {
      paddingTop: 0
    },
    '& .MuiDivider-middle': {
      marginLeft: spacing(6),
      marginRight: spacing(6)
    }
  }
});

const MCardHeader = ({ spacing, typography }) => ({
  root: {
    minHeight: HEADER_HEIGHT,
    padding: spacing(0, 6)
  },
  title: {
    '& .MuiTabs-root': {
      marginTop: spacing(2.5),
      marginBottom: spacing(4)
    },
    '& .MuiTab-wrapper': {
      fontSize: typography.h2.fontSize, // Tab labels in Card are bigger than normal
      paddingBottom: spacing(2.5) // Center tab labels in header
    }
  },
  avatar: {
    marginRight: spacing(2)
  },
  subheader: {
    fontSize: typography.subtitle2.fontSize,
    fontColor: typography.subtitle2.fontColor,
    fontWeight: typography.subtitle2.fontWeight
  },
  action: {
    display: 'flex',
    alignItems: 'center',
    height: HEADER_HEIGHT,
    marginTop: 0,
    marginRight: 0,
    '& > :not(:last-child):not(.MuiIconButton-root)': {
      marginRight: spacing(1)
    },
    '& > :not(:first-child):not(.MuiIconButton-root)': {
      marginLeft: spacing(1)
    }
  }
});

const MCardContent = ({ spacing, breakpoints }) => ({
  root: {
    padding: spacing(6),
    [breakpoints.up('sm')]: {
      padding: spacing(6)
    }
  }
});

const MCardActions = ({ palette, spacing }) => ({
  root: {
    backgroundColor: palette.type === 'dark' ? undefined : palette.background.default,
    borderTop: '1px solid',
    borderTopColor: palette.divider,
    height: spacing(10),
    padding: spacing(2, 3)
  }
});

export default theme => ({
  MuiCard: MCard(theme),
  MuiCardHeader: MCardHeader(theme),
  MuiCardContent: MCardContent(theme),
  MuiCardActions: MCardActions(theme)
});
