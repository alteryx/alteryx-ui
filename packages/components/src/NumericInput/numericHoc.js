import React, { Component } from 'react';

import * as utils from './utils';
import { SPINNER_CHANGE_DELAY, SPINNER_KEYBOARD_INTERVAL, SPINNER_MOUSE_INTERVAL } from './constants';

const numericHoc = WrappedComponent => {
  class Numeric extends Component {
    interval = [];

    timeouts = [];

    state = {};

    static getDerivedStateFromProps({ decimal, fixedDecimal, value }, state) {
      const normalized = utils.normalize(value);
      const isDifferent = utils.compare(normalized, state.normalized);

      if (isDifferent || decimal !== state.decimal || fixedDecimal !== state.fixedDecimal) {
        return {
          normalized,
          fixedDecimal,
          decimal
        };
      }
      return null;
    }

    get isEnabled() {
      const { disabled, readOnly } = this.props;
      return !disabled && !readOnly;
    }

    get currentMin() {
      const { min } = this.props;

      if (min > 0) {
        return 0;
      }
      return min;
    }

    /**
     * Bringing value to the proper format on finish if needed
     */
    numericBlur = event => {
      const { value, max, min, onBlur } = this.props;
      const normalized = utils.normalize(value);
      /*
        Return minimum possible, if value is't within boundaries
      */
      if (!utils.validate(normalized, max, min) || !utils.isEmptyAllowed(value, min)) {
        this.numericOnChange(min);
      } else {
        /*
          Otherwise return origin value
        */
        this.numericOnChange(value);
      }
      // Anyhow fire onBLur
      onBlur(event);
    };

    /**
     * Validator which handle value and check
     * ranges and is it has correct format
     * @param val
     * @returns {boolean}
     */
    validator = val => {
      const { max, min, decimal } = this.props;
      const value = decimal ? utils.trimDecimal(val, max, decimal) : val;

      if (!utils.validateDenormalized(value, max, min, decimal)) {
        return false;
      }

      const normalized = utils.normalize(value);
      if (!utils.validate(normalized, max, this.currentMin)) {
        return false;
      }

      return true;
    };

    /**
     * Handler for entered data
     */
    numericChange = event => {
      const { target } = event;
      const { max, decimal } = this.props;

      const value = utils.trimDecimal(target.value, max, decimal);
      const normalized = utils.normalize(value);

      event.preventDefault();
      if (this.validator(value)) {
        /**
         * Update denormalized and normalized values
         * if normalized is within in ranges update,
         * then fire callback
         */
        this.setState((state, { onChange }) => {
          onChange(value);
          return { normalized, value };
        });
      }
    };

    /**
     * Increment/Decrement value every SPINNER_INTERVAL
     * @param inc (Boolean) manually defined direction
     * @returns {Function}
     */
    numericStart = (inc = null) => event => {
      const isMouseTriggered = typeof inc === 'boolean';
      const isIncrement = isMouseTriggered ? inc : utils.getIncrementFromKeyCode(event);

      if (typeof isIncrement === 'boolean') {
        event.preventDefault();
        if (this.isEnabled) {
          // if user accidentally trigger spinner,
          // firstly increment value once.
          this.iterateValue(isIncrement);

          // if user accidentally trigger we prevent accidentally
          // triggering within timeouts.
          const timeoutId = setTimeout(() => {
            if (isMouseTriggered) {
              document.addEventListener('mouseup', this.numericStop);
            }

            clearInterval(this.interval);

            this.interval = setInterval(
              () => {
                this.iterateValue(isIncrement);
              },
              isMouseTriggered ? SPINNER_MOUSE_INTERVAL : SPINNER_KEYBOARD_INTERVAL
            );
          }, SPINNER_CHANGE_DELAY);

          this.timeouts.push(timeoutId);
        }
      }
    };

    /**
     * Return formatted value if need
     * @param value
     */
    numericOnChange = value => {
      const { decimal, fixedDecimal, max, onChange } = this.props;

      const finalValue = utils.print(value, max, decimal, fixedDecimal);
      onChange(utils.denormalize(finalValue));
    };

    numericStop = () => {
      this.clearTimeouts();
      clearInterval(this.interval);
      this.interval = null;
      document.removeEventListener('mouseup', this.numericStop);
    };

    clearTimeouts = () => {
      this.timeouts.forEach(interval => clearInterval(interval));
      this.timeouts = [];
    };

    iterateValue = isIncrement => {
      const { decimal, max, min, value, step } = this.props;
      const direction = isIncrement ? 1 : -1;
      const incrementer = direction * parseFloat(step);
      const normalized = utils.add(value, incrementer);

      /*
        Return new incremented value if it within boundaries
       */
      if (utils.validate(normalized, max, min)) {
        const denormalized = utils.denormalize(normalized);
        // pass in case denormalize value is correct
        if (utils.validateDenormalized(denormalized, max, min, decimal)) {
          this.numericOnChange(normalized);
        }
        return;
      }

      /*
        If typed value is empty, start iteration from minimum possible value
      */
      if (utils.isValueEmpty(value)) {
        this.numericOnChange(min);
        return;
      }

      /*
        Otherwise keep value unchanged
       */
      this.numericOnChange(value);
    };

    render() {
      return (
        <WrappedComponent
          numericBlur={this.numericBlur}
          numericChange={this.numericChange}
          numericStart={this.numericStart}
          numericStop={this.numericStop}
          validator={this.validator}
          {...this.props}
        />
      );
    }
  }

  Numeric.displayName = `numericHoc(${WrappedComponent.displayName || WrappedComponent.name})`;
  return Numeric;
};

export default numericHoc;
