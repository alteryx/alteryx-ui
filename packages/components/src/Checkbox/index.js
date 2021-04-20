import React from 'react';
import MCheckbox from '@material-ui/core/Checkbox';

import { makeStyles } from '../styles';
import { dataUICMaker } from '../utils';

const useStyles = makeStyles(theme => {
  const checkedColor = theme.palette.primary.main;

  return {
    focusVisible: {
      boxShadow: theme.palette.getFocusedShadowStyle(),
      transition: theme.palette.getFocusTransitions(),
      padding: 0,
      margin: 6,
      borderRadius: theme.spacing(1),
      '& > .MuiIconButton-label': {
        color: checkedColor
      },
      '&.Mui-checked svg, &.MuiCheckbox-indeterminate svg': {
        color: 'inherit',
        backgroundColor: 'transparent'
      }
    }
  };
});

const Checkbox = React.forwardRef((props, ref) => {
  const classes = useStyles();
  return <MCheckbox focusVisibleClassName={classes.focusVisible} ref={ref} {...props} />;
});

export default dataUICMaker(Checkbox, 'Checkbox');
