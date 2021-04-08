const MuiListBox = ({ palette, spacing, typography }) => ({
  container: {
    // Makes divider for last item invisible
    '& div > li:last-child': {
      border: 'none'
    },
    margin: spacing(-1, 0)
  },
  checkbox: {
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: spacing(1)
  },
  item: {},
  itemText: {
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap'
  },
  icon: {
    color: palette.blueGrey[500],
    marginLeft: spacing(1),
    marginBottom: -spacing(0.5)
  },
  footer: {},
  listBox: {
    padding: spacing(4),
    '& > .MuiGrid-item': {
      padding: spacing(0.5, 0)
    }
  },
  noResultsTypography: {
    cursor: 'default'
  },
  searchFormControl: {
    display: 'flex'
  },
  searchInput: {},
  titleTypography: {
    fontWeight: typography.fontWeightBold
  }
});

export default theme => ({
  MuiListBox: MuiListBox(theme)
});
