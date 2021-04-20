import { fade } from '../../styles';

const MSkeleton = ({ palette }) => ({
  root: {
    backgroundColor: fade(palette.blueGrey[500], 0.15)
  }
});

export default theme => ({
  MuiSkeleton: MSkeleton(theme)
});
