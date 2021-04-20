import React from 'react';
import { Radio as MRadio } from '@material-ui/core';
import PropTypes from 'prop-types';

import { dataUICMaker } from '../utils';
import { makeStyles } from '../styles';

const useStyles = makeStyles(({ palette }) => {
  return {
    focusVisible: {
      '& > .MuiIconButton-label': {
        boxShadow: palette.getFocusedShadowStyle(),
        color: ({ color }) => color === 'secondary' ? palette.secondary.main : palette.primary.main
      }
    }
  };
});

const Radio = React.forwardRef((props, ref) => {
  const { color } = props;
  const classes = useStyles({ color });

  return <MRadio {...props} focusVisibleClassName={classes.focusVisible} ref={ref} />;
});

Radio.propTypes = {
  color: PropTypes.string
};

Radio.defaultProps = {
  color: undefined
};
export default dataUICMaker(Radio, 'Radio');
