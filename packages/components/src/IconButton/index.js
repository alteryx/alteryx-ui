import React from 'react';
import { IconButton as MIconButton } from '@material-ui/core';

import { makeStyles } from '../styles';
import { dataUICMaker } from '../utils';

const useStyles = makeStyles(({ palette }) => ({
  focusVisible: {
    boxShadow: palette.getFocusedShadowStyle()
  }
}));

const IconButton = React.forwardRef((props, ref) => {
  const classes = useStyles();

  return <MIconButton {...props} focusVisibleClassName={classes.focusVisible} ref={ref} />;
});

export default dataUICMaker(IconButton, 'IconButton');
