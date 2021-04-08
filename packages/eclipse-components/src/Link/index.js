import React from 'react';
import MLink from '@material-ui/core/Link';

import { makeStyles } from '../styles';
import { dataUICMaker } from '../utils';

const useStyles = makeStyles(theme => {
  return {
    primaryColor: {
      color: theme.palette.text.link
    }
  };
});

const Link = React.forwardRef((props, ref) => {
  const classes = useStyles();
  return <MLink ref={ref} TypographyClasses={{ colorPrimary: classes.primaryColor }} {...props} />;
});

export default dataUICMaker(Link, 'Link');
