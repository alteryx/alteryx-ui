import { fade } from '../../styles';

const MList = ({ spacing }) => ({
  root: {
    overflowY: 'auto' // To remove the ListSubheader sticky behaviour
  },
  padding: {
    paddingTop: spacing(1), // We want our spacing to be more compact than MUI
    paddingBottom: spacing(1)
  }
});

const MListItem = ({ spacing, palette }) => ({
  root: {
    paddingTop: spacing(0.625), // We want our spacing to be more compact than MUI
    paddingBottom: spacing(0.625),
    '&$focusVisible': {
      backgroundColor: palette.action.hover // We want focus to match hover instead of selected
    }
  },
  dense: {
    paddingTop: spacing(0.625),
    paddingBottom: spacing(0.625)
  },
  gutters: {
    paddingRight: spacing(2.5),
    paddingLeft: spacing(3)
  }
});

const MListItemText = ({ spacing }) => ({
  root: {},
  inset: {
    paddingLeft: spacing(11) // We want our spacing to be more compact than MUI
  },
  secondary: {
    marginTop: -spacing(0.5)
  }
});

const MListItemSecondaryAction = ({ spacing }) => ({
  root: {
    right: spacing(2.5),
    minWidth: 20 // gets rid of weird layout issues with things like checkboxes
  }
});

const MListItemAvatar = theme => ({
  root: {
    minWidth: 0,
    marginRight: theme.spacing(2)
  }
});

// TODO: Move this function to utils once we've refactored it to support more than just dataUICMaker.
const conditionalOverride = (condition, overrides) => (condition ? overrides : undefined);

const MListItemIcon = ({ palette, spacing }) => ({
  root: {
    minWidth: 0, // Kill the MUI minWidth so we can control spacing with easier to understand margin/padding styles.
    marginRight: spacing(2),
    // We don't want any override at all in light mode, because it would have to be a magic number.
    ...conditionalOverride(palette.type === 'dark', { color: fade(palette.text.primary, 0.54) })
  }
});

export default theme => ({
  MuiList: MList(theme),
  MuiListItem: MListItem(theme),
  MuiListItemIcon: MListItemIcon(theme),
  MuiListItemText: MListItemText(theme),
  MuiListItemSecondaryAction: MListItemSecondaryAction(theme),
  MuiListItemAvatar: MListItemAvatar(theme)
});
