/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import MaterialTextField from '@material-ui/core/TextField';

import { dataUICMaker } from '../utils';
import { makeStyles } from '../styles';

const useStyles = makeStyles({
  root: {
    borderColor: 'transparent',
    backgroundColor: 'transparent',
    '&:hover': {
      borderColor: 'transparent'
    }
  }
});

const TextField = React.forwardRef((props, ref) => {
  const { variant, InputProps, ...rest } = props;
  if (variant === 'borderless') {
    const borderlessClasses = useStyles();
    const InputPropsClasses = InputProps && InputProps.classes;
    return (
      <MaterialTextField
        {...rest}
        InputProps={{ ...InputProps, ...{ classes: { ...borderlessClasses, ...InputPropsClasses } } }}
        ref={ref}
      />
    );
  }
  if (variant === 'outlined') {
    console.warn(`UI-Core: The TextField variant "${variant}" is not supported.`);
    return <MaterialTextField {...rest} InputProps={InputProps} ref={ref} />;
  }
  return <MaterialTextField {...props} ref={ref} />;
});

TextField.defaultProps = {
  InputProps: undefined,
  select: undefined,
  variant: 'standard'
};

TextField.propTypes = {
  InputProps: PropTypes.shape({}),
  select: PropTypes.bool,
  variant: PropTypes.string
};

export default dataUICMaker(TextField, 'TextField');
