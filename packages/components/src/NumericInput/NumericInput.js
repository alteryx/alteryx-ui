import React from 'react';
import classNames from 'classnames';
import { makeStyles, createStyles } from '../';

import SmartCursorInput from './SmartCursorInput';
import NumericSpinner from './NumericSpinner';
import numericHoc from './numericHoc';

const { ...propTypes } = SmartCursorInput.propTypes;
const defaultProps = {};

const useStyles = makeStyles(({ spacing }) =>
  createStyles({
    adornment: {
      lineHeight: '16px',
      userSelect: 'none'
    },
    adornmentStart: {
      paddingRight: 0
    },
    adornmentEnd: {
      marginRight: spacing(1)
    }
  })
);

const applyAdornmentStyle = component => {
  const classes = useStyles();
  return React.cloneElement(component, {
    ...component.props,
    disableTypography: true,
    className: classNames(
      classes.adornment,
      {
        [classes.adornmentStart]: component.props.position === 'start',
        [classes.adornmentEnd]: component.props.position === 'end'
      },
      component.props.className
    )
  });
};

function NumericInput({
  decrementButtonText,
  endAdornment,
  incrementButtonText,
  startAdornment,
  numericBlur,
  numericChange,
  numericStart,
  onChange,
  numericStop,
  type,
  fixedDecimal,
  value,
  classes,
  ...rest
}) {
  const disallowedProps = ['onBlur', 'onKeydown', 'onKeyUp'];

  // TODO: Replace with the util in core, once available
  function filterProps(incomingProps, disallowedPropNames) {
    return Object.entries(incomingProps)
      .filter(([key]) => !disallowedPropNames.includes(key))
      .reduce((obj, [key, val]) => Object.assign(obj, { [key]: val }), {});
  }
  const startAdornmentStyled = startAdornment && applyAdornmentStyle(startAdornment);
  const endAdornmentStyled = endAdornment && applyAdornmentStyle(endAdornment);

  return (
    <SmartCursorInput
      className={classNames(classes.root, rest.className)}
      disabled={rest.readOnly}
      endAdornment={
        <NumericSpinner
          classes={classes}
          decrementButtonText={decrementButtonText}
          endAdornment={endAdornmentStyled}
          fixedDecimal={fixedDecimal}
          incrementButtonText={incrementButtonText}
          onChange={onChange}
          type={type}
          value={value}
          {...rest}
        />
      }
      onBlur={numericBlur}
      onChange={numericChange}
      onKeyDown={numericStart()}
      onKeyUp={numericStop()}
      startAdornment={startAdornmentStyled}
      type="text"
      {...filterProps(rest, disallowedProps)}
      value={value}
    />
  );
}

NumericInput.propTypes = propTypes;
NumericInput.defaultProps = defaultProps;

export default numericHoc(NumericInput);
