import { darken, fade, lighten } from '../../styles';

const MTable = () => ({
  root: {}
});

const MTableBody = () => ({
  root: {
    '& tr:last-child > th, tr:last-child > td': {
      borderBottom: 'none'
    }
  }
});

const MTableHead = () => ({
  root: {}
});

const MTableRow = theme => ({
  root: {
    '&$hover:hover': {
      backgroundColor: theme.palette.type === 'dark' ? 'rgba(255, 255, 255, 0.14)' : theme.palette.blueGrey[50]
    },
    '&$selected': {
      backgroundColor: theme.palette.type === 'dark' ? 'rgba(255, 255, 255, 0.14)' : theme.palette.blueGrey[100]
    }
  },
  head: {},
  selected: {}
});

const MTableCell = theme => ({
  root: {
    padding: `${theme.spacing(3.5)}px ${theme.spacing(3.25)}px`,
    '&:last-child': {
      paddingRight: theme.spacing(3.25)
    }
  },
  sizeSmall: {
    padding: `6px ${theme.spacing(3.25)}px` // height of 6px is material default
  },
  body: {
    fontSize: theme.typography.pxToRem(13),
    fontWeight: 'normal',
    lineHeight: 1.54
  },
  head: {
    padding: `${theme.spacing(3.5)}px ${theme.spacing(3.25)}px`,
    color: theme.palette.text.secondary,
    fontWeight: 600,
    fontSize: theme.typography.pxToRem(13),
    lineHeight: 1.54,
    userSelect: 'none',
    marginBottom: theme.spacing(1),
    '&$sizeSmall': {
      lineHeight: 1.54
    }
  },
  paddingCheckbox: {
    width: 40
  },
  stickyHeader: {
    backgroundColor: theme.palette.background.paper
  }
});

const MTableSortLabel = theme => ({
  active: {
    color: theme.palette.brand.deepSpace
  }
});

const MTablePagination = theme => ({
  root: {
    fontSize: theme.typography.pxToRem(13),
    fontWeight: 'normal',
    lineHeight: 1.54,
    borderTop: `1px solid ${theme.palette.divider}`
  },
  caption: {
    fontSize: theme.typography.pxToRem(13),
    fontWeight: 'normal',
    lineHeight: 1.54
  },
  input: {
    border: 'none'
  },
  select: {
    minWidth: 0,
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(6)
  },
  selectRoot: {
    fontSize: theme.typography.pxToRem(13),
    fontWeight: 'normal',
    lineHeight: 1.54
  },
  selectIcon: {
    color: theme.palette.blueGrey[500]
  },
  actions: {
    '& svg': {
      color: theme.palette.blueGrey[500],
      width: 20
    },
    '&:hover': {
      backgroundColor: 'transparent'
    }
  }
});

const MTableFooter = theme => ({
  root: {
    fontSize: theme.typography.pxToRem(13),
    fontWeight: 'normal',
    lineHeight: 1.54,
    borderTop: `1px solid
    ${
      theme.palette.type === 'light'
        ? lighten(fade(theme.palette.divider, 1), 0.88)
        : darken(fade(theme.palette.divider, 1), 0.68)
    }`
  }
});

export default theme => ({
  MuiTable: MTable(),
  MuiTableBody: MTableBody(),
  MuiTableHead: MTableHead(),
  MuiTableRow: MTableRow(theme),
  MuiTableCell: MTableCell(theme),
  MuiTableSortLabel: MTableSortLabel(theme),
  MuiTablePagination: MTablePagination(theme),
  MuiTableFooter: MTableFooter(theme)
});
