import React from 'react';
import PropTypes from 'prop-types';
import { noop } from 'lodash';
import { Button, makeStyles, createStyles } from '../';
import { ChevronDown, ChevronUp } from '@alteryx/icons';

import numericHoc from './numericHoc';

const propTypes = {
  decrementButtonText: PropTypes.string,
  disabled: PropTypes.bool,
  endAdornment: PropTypes.element,
  error: PropTypes.bool,
  focused: PropTypes.bool,
  incrementButtonText: PropTypes.string,
  numericStart: PropTypes.func,
  numericStop: PropTypes.func,
  readOnly: PropTypes.bool
};

const defaultProps = {
  disabled: undefined,
  endAdornment: null,
  error: undefined,
  focused: undefined,
  numericStart: noop,
  numericStop: noop,
  readOnly: undefined
};

const useStyles = makeStyles(() =>
  createStyles({
    numericSpinnerRoot: {
      paddingRight: 2
    }
  })
);

function NumericSpinner({
  classes,
  decrementButtonText,
  disabled,
  endAdornment,
  incrementButtonText,
  numericStart,
  numericStop,
  readOnly
}) {
  const spinnerClasses = useStyles();
  const { incrementButton, decrementButton } = classes;
  const buttonVariant = disabled ? 'text' : 'contained';

  return (
    <>
      {endAdornment}
      <div className={spinnerClasses.numericSpinnerRoot}>
        <Button
          aria-label={incrementButtonText}
          className={incrementButton}
          disabled={disabled || readOnly}
          onMouseDown={numericStart(true)}
          onMouseLeave={numericStop}
          onMouseUp={numericStop}
          tabIndex={-1}
          variant={buttonVariant}
        >
          <ChevronUp className={classes.incrementIcon} size="small" />
        </Button>
        <Button
          aria-label={decrementButtonText}
          className={decrementButton}
          disabled={disabled || readOnly}
          onMouseDown={numericStart(false)}
          onMouseLeave={numericStop}
          onMouseUp={numericStop}
          tabIndex={-1}
          variant={buttonVariant}
        >
          <ChevronDown className={classes.decrementIcon} size="small" />
        </Button>
      </div>
    </>
  );
}

NumericSpinner.propTypes = propTypes;
NumericSpinner.defaultProps = defaultProps;

export default numericHoc(NumericSpinner);
