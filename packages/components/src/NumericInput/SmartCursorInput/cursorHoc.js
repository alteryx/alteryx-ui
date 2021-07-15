import React, { createRef } from 'react';
import PropTypes from 'prop-types';
import { KEY_DELETE } from 'keycode-js';
import { isEmpty, last } from 'lodash';
import { filterProps } from '../../utils';

// TODO: uncomment and implement after the util updates in core are are released
// import { filterProps } from '@ayx/ui-core/utils';

import { CLIPBOARD_KEYS, META_KEYS, UNDO_KEYS } from './constants';

const setRef = (ref, node) => {
  if (typeof ref === 'function') {
    ref(node);
  } else if (ref) {
    ref.current = node; // eslint-disable-line no-param-reassign
  }
};

const noop = () => undefined;

function cursorHoc(InputComponent) {
  class CursorHoc extends React.Component {
    undoes = false;

    inserts = [];

    predictedValue = null;

    cursorPosition = 0;

    inputRef = createRef();

    lastPressed = null;

    componentDidUpdate({ value: prevValue }) {
      const { value } = this.props;

      const valueStr = value === undefined ? '0' : value.toString();
      const prevValueStr = prevValue === undefined ? '0' : prevValue.toString();

      let valueDiff;
      let pointDiff = 0;

      if (valueStr === prevValueStr) {
        return;
      }
      valueDiff = valueStr.length - prevValueStr.length;

      /*
        Does't change cursor position, if DELETE pressed and value decreased
       */
      if (valueDiff < 0 && this.lastPressed === KEY_DELETE) {
        this.setNewPosition();
        return;
      }

      /*
        Count diff at predicted value, if length of value does't change
       */
      if (!valueDiff && this.predictedValue) {
        const currentPoint = valueStr.indexOf('.');
        const predictedPoint = this.predictedValue.indexOf('.');

        valueDiff = this.predictedValue.length - valueStr.length;

        /*
          If current cursor position same as point and old difference by one
         */
        if (this.cursorPosition === currentPoint && this.cursorPosition + 1 === predictedPoint) {
          pointDiff = 1;
        }
      }

      const pos = Math.max(0, this.cursorPosition + valueDiff + pointDiff);

      this.setNewPosition(pos);
      this.cursorPosition = pos;

      this.predictedValue = null;

      this.historyUpdate(prevValue);
    }

    setNewPosition = (pos = this.cursorPosition) => {
      if (this.inputRef && this.inputRef.current && this.inputRef.current.setSelectionRange) {
        this.inputRef.current.setSelectionRange(pos, pos);
      }
    };

    handleBlur = event => {
      const { onBlur } = this.props;
      this.saveCursorPosition();
      onBlur(event);
    };

    handleClick = event => {
      const { onClick } = this.props;
      this.saveCursorPosition();
      onClick(event);
    };

    /**
     * Assembly excepted value according to pressed key
     * @param value
     * @param key
     */
    predictValue = (value, key) => {
      const { selectionStart, selectionEnd } = this.inputRef.current;
      const valueStr = value.toString();

      if (!key || key.length !== 1) {
        this.predictedValue = null;
        return;
      }

      // Concat part [start,selectionStart] + entered char + [selectionEnd, end]
      this.predictedValue = `${valueStr.substr(0, selectionStart)}${key}${valueStr.substr(selectionEnd)}`;
    };

    /**
     * Check predicted value thought the passed validator
     * if it specified
     * @returns {*}
     */
    validatePredictedValue = () => {
      const { predictedValue } = this;
      const { validator } = this.props;

      // Skip validation if next value not predicted
      if (!predictedValue) {
        return true;
      }

      // Skip validation if validator func not specified
      if (validator === noop) {
        return true;
      }

      return validator(this.predictedValue);
    };

    /**
     * Saving previous value for undo/redo history
     */
    historyUpdate = value => {
      const { cursorPosition, inserts } = this;

      // ignore, if changed caused by undo operation
      if (!this.undoes) {
        inserts.push({
          cursorPosition,
          value
        });
      }
      // Unmark this value update as undo operation
      this.undoes = false;
    };

    /**
     * Restoring value from undo/redo operations
     */
    historyRestore = () => {
      const { onChange } = this.props;
      const insert = last(this.inserts);

      if (!isEmpty(insert)) {
        const { value } = this.inserts.pop();

        // Mark this change as undo
        this.undoes = true;

        onChange({
          target: { value: value.toString() },
          preventDefault: noop
        });
      }
    };

    /**
     * Detect the keyDown event and suppress changing position of caret
     * @param event
     */
    handleKeyDown = event => {
      const { onKeyDown, value } = this.props;
      const { key, keyCode, shiftKey, metaKey, ctrlKey } = event;

      this.saveCursorPosition();
      this.lastPressed = keyCode;
      const isMetaPressed = metaKey || ctrlKey || shiftKey;
      const isCtrlPressed = ctrlKey || metaKey;

      const isMeta = META_KEYS.includes(keyCode) || isMetaPressed;
      const isClipboard = isMetaPressed && CLIPBOARD_KEYS.includes(keyCode);
      const isUndo = isCtrlPressed && UNDO_KEYS.includes(keyCode);

      // Adding this check so that tabbing works correctly in Safari without also firing the onBlur event twice in other browsers.
      if (
        (window.navigator.userAgent.includes('Safari') &&
          !window.navigator.userAgent.includes('Chrome') &&
          key === 'Tab') ||
        (key === 'Tab' && shiftKey)
      ) {
        this.handleBlur(event);
        return;
      }

      if (isUndo) {
        // Handle CMD+Z by own
        this.historyRestore();
        // Prevent any browser CMD+Z behaviour
        event.preventDefault();
        return;
      }

      if (!isMeta && !isClipboard) {
        this.predictValue(value, key);
        // Prevent any browser behaviour if predicted value not valid
        if (!this.validatePredictedValue()) {
          event.preventDefault();
        }

        // save last caret position if component won't be updated
        setTimeout(this.setNewPosition, 0);
      }

      onKeyDown(event);
    };

    handleKeyUp = event => {
      const { onKeyUp } = this.props;

      this.saveCursorPosition();

      onKeyUp(event);
    };

    saveCursorPosition = () => {
      this.cursorPosition = Math.max(0, this.inputRef.current.selectionEnd);
    };

    render() {
      const disallowedProps = ['validator'];
      const filteredProps = filterProps(this.props, disallowedProps);
      const { inputRef, ...restProps } = filteredProps;
      return (
        <InputComponent
          // TODO: Verify it's actually bad to pass validator into InputComponent and remove this filter if not.
          {...restProps}
          inputRef={node => {
            setRef(this.inputRef, node);
            setRef(inputRef, node);
          }}
          onBlur={this.handleBlur}
          onClick={this.handleClick}
          onFocus={() => this.setNewPosition()}
          onKeyDown={this.handleKeyDown}
          onKeyUp={this.handleKeyUp}
        />
      );
    }
  }

  CursorHoc.propTypes = {
    inputRef: PropTypes.func,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    onKeyDown: PropTypes.func,
    onKeyUp: PropTypes.func,
    validator: PropTypes.func,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
  };

  CursorHoc.defaultProps = {
    inputRef: undefined,
    onBlur: noop,
    onChange: noop,
    onClick: noop,
    onKeyDown: noop,
    onKeyUp: noop,
    validator: noop
  };

  return CursorHoc;
}

export default cursorHoc;
