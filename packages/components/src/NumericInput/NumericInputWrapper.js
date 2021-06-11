import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { noop } from 'lodash';
import { useFormControl, makeStyles, withStyles } from '../';
import clsx from 'clsx';
import formControlState from '@material-ui/core/FormControl/formControlState';

import NumericInput from './NumericInput';

export const propTypes = {
  /**
   * Value witch falls in range of the given typeTYPES
   */
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * Num of symbols after fixed
   */
  decimal: PropTypes.number,
  /**
   * Enable fixed decimal
   */
  fixedDecimal: PropTypes.bool,
  /**
   * The minimum possible value for numeric TextField
   */
  min: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * The maximum possible value for numeric TextField
   */
  max: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * Iteration step
   */
  step: PropTypes.number,
  /**
   * This property helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: PropTypes.string,
  /**
   * If `true`, the `input` element will be focused during the first mount.
   */
  autoFocus: PropTypes.bool,
  /**
   * The default value of the `input` element.
   */
  decrementButtonText: PropTypes.string,
  /**
   * Properties applied to the [`aria-label`] of the decrementButton on NumericSpinner component.
   */
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * If `true`, the `input` element will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the label will be displayed in an error state.
   */
  endAdornment: PropTypes.node,
  /**
   * Places an InputAdornmentLabel at the end of the input.
   */
  error: PropTypes.bool,
  /**
   * If `true`, the input will take up the full width of its container.
   */
  fullWidth: PropTypes.bool,
  /**
   * The id of the `input` element.
   * Use this property to make `label` accessible for screen readers.
   */
  id: PropTypes.string,
  /**
   * Properties applied to the [`InputLabel`](/https://material-ui.com/api/input-label/) element.
   */

  incrementButtonText: PropTypes.string,
  /**
   * Properties applied to the [`aria-label`] of the incrementButton on NumericSpinner component.
   */
  InputLabelProps: PropTypes.objectOf(PropTypes.any),
  /**
   * Properties applied to the [Input](https://material-ui.com/api/input/) element
   */
  InputProps: PropTypes.objectOf(PropTypes.any),
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: PropTypes.objectOf(PropTypes.any),
  /**
   * This property can be used to pass a ref callback to the `input` element.
   */
  inputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  /**
   * The label content.
   */
  label: PropTypes.node,
  /**
   * If `true`, a textarea element will be rendered instead of an input.
   */
  multiline: PropTypes.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: PropTypes.string,
  /**
   * Callback fired when the input is blurred.
   */
  onBlur: PropTypes.func,
  /**
   * Callback fired when the value is changed.
   */
  onChange: PropTypes.func,
  /**
   * The short hint displayed in the input before the user enters a value.
   */
  onFocus: PropTypes.func,
  /**
   * Callback fired when the input is focused.
   */
  placeholder: PropTypes.string,
  /**
   * If `true`, the label is displayed as required and the `input` element` will be required.
   */
  readOnly: PropTypes.bool,
  /**
   * If `true`, the input will only display a value and wont allow values to change.
   */
  required: PropTypes.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  rowsMax: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  startAdornment: PropTypes.node,
  /**
   * Places an InputAdornmentLabel at the beginning of the input.
   */
  type: PropTypes.string,
  dataUIC: PropTypes.string
};

const defaultProps = {
  autoComplete: undefined,
  autoFocus: false,
  dataUIC: undefined,
  decimal: 0,
  defaultValue: '',
  disabled: undefined,
  error: undefined,
  fixedDecimal: false,
  fullWidth: undefined,
  id: undefined,
  InputLabelProps: {},
  InputProps: {},
  inputProps: {},
  inputRef: undefined,
  label: undefined,
  max: Number.MAX_SAFE_INTEGER,
  min: Number.MIN_SAFE_INTEGER,
  multiline: false,
  name: undefined,
  onBlur: noop,
  onChange: noop,
  placeholder: undefined,
  readOnly: undefined,
  required: undefined,
  rows: undefined,
  rowsMax: undefined,
  step: 1,
  type: 'text'
};

const useStyles = makeStyles(() => ({
  dataUICWrapperChild: {
    width: '100%'
  }
}));

const styles = ({ palette }) => ({
  root: {},
  incrementButton: {
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    padding: 0,
    borderRadius: 0,
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    transition: '0.1s background',
    width: 20,
    height: 11,
    marginBottom: 0,
    textAlign: 'center',
    '& svg': {
      color: palette.blueGrey[500],
      marginTop: 0
    },
    '& span': {
      height: 11
    }
  },
  decrementButton: {
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    padding: 0,
    borderRadius: 0,
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    transition: '0.1s background',
    width: 20,
    height: 11,
    marginTop: 2,
    textAlign: 'center',
    '& svg': {
      color: palette.blueGrey[500],
      marginTop: 0
    },
    '& span': {
      height: 11
    }
  },
  incrementIcon: {
    display: 'block'
  },
  decrementIcon: {
    display: 'block'
  }
});

function NumericInputWrapper(props) {
  const {
    autoComplete,
    autoFocus,
    className,
    decimal,
    decrementButtonText,
    defaultValue,
    fixedDecimal,
    fullWidth,
    id,
    incrementButtonText,
    InputProps,
    inputProps,
    inputRef,
    max,
    multiline,
    min,
    name,
    onBlur,
    onChange,
    onFocus,
    placeholder,
    readOnly,
    rows,
    rowsMax,
    step,
    type,
    value,
    endAdornment,
    startAdornment,
    'data-uic': dataUIC
  } = props;
  const classes = useStyles();
  const { classes: propsClasses } = props;
  const [stateValue, setValue] = useState(defaultValue);
  const isControlled = value !== undefined;

  const muiFormControl = useFormControl();
  const fcs = formControlState({
    props,
    muiFormControl,
    states: ['disabled', 'error']
  });

  const onChangeWithState = newValue => {
    if (isControlled === false) {
      setValue(newValue);
    }
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div data-uic={dataUIC}>
      <NumericInput
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        classes={propsClasses}
        className={clsx(propsClasses.root, className, {
          [classes.dataUICWrapperChild]: typeof muiFormControl !== 'undefined'
        })}
        decimal={decimal}
        decrementButtonText={decrementButtonText}
        disabled={fcs.disabled}
        endAdornment={endAdornment}
        error={fcs.error}
        fixedDecimal={fixedDecimal}
        fullWidth={fullWidth}
        id={id}
        incrementButtonText={incrementButtonText}
        inputProps={inputProps}
        inputRef={inputRef}
        max={max}
        min={min}
        multiline={multiline}
        name={name}
        onBlur={onBlur}
        onChange={onChangeWithState}
        onFocus={onFocus}
        placeholder={placeholder}
        readOnly={readOnly}
        rows={rows}
        rowsMax={rowsMax}
        startAdornment={startAdornment}
        step={step}
        type={type}
        value={isControlled ? value : stateValue}
        {...InputProps}
      />
    </div>
  );
}

NumericInputWrapper.propTypes = propTypes;
NumericInputWrapper.defaultProps = defaultProps;

export default withStyles(styles, { name: 'MuiNumericInput' })(NumericInputWrapper);
