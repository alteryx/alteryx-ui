import { BigNumber } from 'bignumber.js';
import { isNil, repeat } from 'lodash';
import { KEY_UP } from 'keycode-js';

import { CONTROL_KEYS, FORMAT_FLOAT, FORMAT_INTEGER, FORMAT_POSITIVE, INTERMEDIATE_FORMATS } from './constants';

export const compare = (first, second) => BigNumber(first).comparedTo(second);

export const normalize = value => {
  const normalized = BigNumber(value);
  return !normalized.isNaN() ? normalized : BigNumber(0);
};

export const add = (first, second) => normalize(first).plus(normalize(second)).toString();

export const denormalize = value => value.toString();

/**
 * Validating process is:
 * 1. Use given custom max\min
 * 2, If custom ranges not given, use system max\min
 * 3. Return false if value placed in given range
 * @param value - Long for Int64, JS Number for the rest
 * @param max
 * @param min
 * @returns {boolean}
 */
export const validate = (value, max, min) => {
  if (!isNil(max) || !isNil(min)) {
    return !(compare(value, max) === 1 || compare(value, min) === -1);
  }

  return true;
};

export const isValueEmpty = value => value === '' || value === '0';

/**
 * Forbid empty value if minimum specified as 0
 * @param value
 * @param min
 * @returns {boolean}
 */
export const isEmptyAllowed = (value, min) => !(isValueEmpty(value) && min === 0);
/**
 * Get left and right sizes from either strLength and decimal
 * @param max
 * @param decimal
 * @returns {{left: number, right: *}}
 */
const getLeftRight = (max, decimal) => ({
  left: max.toString().length,
  right: decimal
});

export const extendDecimal = (value, max, decimal) => {
  const { right } = getLeftRight(max, decimal);
  const pointPos = value.indexOf('.');

  const pointNeeded = pointPos > 0 ? 0 : 1;
  const nullNeeded = pointPos > 0 ? right - (value.length - pointPos) + 1 : right;

  return `${value}${repeat('.', pointNeeded)}${repeat('0', nullNeeded)}`;
};

export const formatFloat = (value, max, decimal) => {
  const { left, right } = getLeftRight(max, decimal);
  const matchPattern = `(-{0,1}[0-9]{1,${left}})([0-9.]{0,${right + 1}}).*`;
  const matchReg = new RegExp(matchPattern);

  return value.replace(matchReg, '$1|$2').replace(/\|$/gm, '').replace('.', '').replace('|', '.');
};

export const trimDecimal = (initialValue, max, decimal) => {
  /*
    Trim all non digit chars
   */
  const value = initialValue.replace(/[^0-9.-]+/gm, '');

  /*
    Trim decimal value
   */
  if (decimal) {
    return formatFloat(value, max, decimal);
  }

  /*
    Trim integer value
   */
  return value.replace(/\.[^.-]+$/gm, '');
};

export const allowIntermediateValue = value => INTERMEDIATE_FORMATS.includes(value);

/**
 * Check is denormalized value correct
 * @param value - String
 * @param max
 * @param min
 * @param decimal
 * @returns {*|boolean}
 */
export const validateDenormalized = (value, max, min, decimal) => {
  const format = decimal ? FORMAT_FLOAT : FORMAT_INTEGER;

  /*
    Although forbidding non numeric formats, pass intermediate values
   */
  if (!(format.test(value) || allowIntermediateValue(value))) {
    return false;
  }

  /*
    Disallow minus in positive numbers, including zero
   */
  if (min >= 0 && !FORMAT_POSITIVE.test(value)) {
    return false;
  }

  /*
    Disallow non-format decimal values
   */
  if (max && decimal) {
    const { left, right } = getLeftRight(max, decimal);
    const formattedDecimalValue = extendDecimal(value, max, decimal);
    const formatPattern = `^-{0,1}[0-9]{0,${left}}.[0-9]{0,${right}}$`;
    const formatReg = new RegExp(formatPattern);
    return formatReg.test(formattedDecimalValue);
  }
  return true;
};

/**
 * Check is denormalized value
 * @param value
 * @param max
 * @param decimal
 * @param fixedDecimal
 * @returns {string}
 */
export const print = (value, max, decimal, fixedDecimal) => {
  /*
    Printing fixed decimal values
   */
  if (value && max && decimal && fixedDecimal) {
    const formattedFloat = formatFloat(value, max, decimal);
    return extendDecimal(formattedFloat, max, decimal);
  }

  /*
    Printing decimal values
   */
  if (value && decimal) {
    return BigNumber(value).toString();
  }

  /*
    Printing integer values if it's given
   */
  return value ? normalize(value).toString() : value;
};

export const getIncrementFromKeyCode = ({ keyCode }) => {
  if (!CONTROL_KEYS.includes(keyCode)) return null;
  return keyCode === KEY_UP;
};
