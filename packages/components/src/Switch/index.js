import React from 'react';
import { Switch as MSwitch } from '@material-ui/core';

import { makeStyles } from '../styles';
import { dataUICMaker } from '../utils';

const useStyles = makeStyles(({ palette }) => {
  return {
    focusVisible: {
      boxShadow: 'none',
      '& + .MuiSwitch-track': {
        boxShadow: palette.getFocusedShadowStyle()
      }
    }
  };
});

const Switch = React.forwardRef((props, ref) => {
  const classes = useStyles();

  return <MSwitch {...props} focusVisibleClassName={classes.focusVisible} ref={ref} />;
});

export default dataUICMaker(Switch, 'Switch');
