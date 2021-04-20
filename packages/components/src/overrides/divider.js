import { fade } from '../../styles';

const MDivider = ({ palette }) => ({
  root: {
    backgroundColor: palette.type === 'dark' ? fade(palette.grey[400], 0.12) : fade(palette.blueGrey[500], 0.2)
  },
  light: {
    backgroundColor: palette.type === 'dark' ? fade(palette.grey[400], 0.07) : fade(palette.blueGrey[500], 0.1)
  },
  middle: {
    marginLeft: 20,
    marginRight: 20
  }
});

export default theme => ({
  MuiDivider: MDivider(theme)
});