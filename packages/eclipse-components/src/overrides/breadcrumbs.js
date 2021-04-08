import { fade } from '../../styles';

const MBreadcrumbs = ({ palette, spacing, typography }) => ({
  ol: {
    '& :last-child > p': {
      fontWeight: typography.fontWeightBold,
      color: palette.text.secondary
    },
    '& :last-child > a': {
      fontWeight: typography.fontWeightBold
    }
  },
  separator: {
    marginLeft: spacing(1),
    marginRight: spacing(1)
  }
});

const MPrivateBreadcrumbCollapsed = ({ palette, spacing }) => ({
  root: {
    backgroundColor: fade(palette.blueGrey['300'], 0.25),
    color: palette.secondary.contrastText,
    '&:focus': {
      backgroundColor: fade(palette.blueGrey['300'], 0.25)
    },
    '&:hover': {
      backgroundColor: fade(palette.blueGrey['300'], 0.4)
    },
    marginRight: 0,
    marginLeft: 0,
    borderRadius: spacing(1)
  },
  icon: {
    width: 16,
    color: palette.action.passive
  }
});

export default theme => ({
  PrivateBreadcrumbCollapsed: MPrivateBreadcrumbCollapsed(theme),
  MuiBreadcrumbs: MBreadcrumbs(theme)
});
