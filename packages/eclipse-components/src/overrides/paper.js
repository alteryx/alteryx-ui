/* eslint-disable ui-core/no-hardcoded-colors */
import { fade } from '../../styles';

const shadowColorDark = '#000';

const MPaper = theme => ({
  root: {},
  rounded: {
    borderRadius: theme.spacing(1.5)
  },
  elevation0: {
    boxShadow: theme.zDepth.shadows[0]
  },
  elevation1: {
    boxShadow: theme.palette.type === 'dark' ? `0 1px 0 0 ${fade(shadowColorDark, 0.04)}` : theme.zDepth.shadows[1]
  },
  elevation2: {
    boxShadow: theme.palette.type === 'dark' ? `0 1px 0px 0 ${fade(shadowColorDark, 0.12)}` : theme.zDepth.shadows[2]
  },
  elevation3: {
    boxShadow: theme.palette.type === 'dark' ? `0 5px 10px 0 ${fade(shadowColorDark, 0.16)}` : theme.zDepth.shadows[3]
  },
  elevation4: {
    boxShadow: theme.palette.type === 'dark' ? `0 10px 20px 0 ${fade(shadowColorDark, 0.25)}` : theme.zDepth.shadows[4]
  },
  elevation5: {
    boxShadow: theme.palette.type === 'dark' ? `0 10px 20px 0 ${fade(shadowColorDark, 0.3)}` : theme.zDepth.shadows[5]
  }
});

export default theme => ({
  MuiPaper: MPaper(theme)
});
