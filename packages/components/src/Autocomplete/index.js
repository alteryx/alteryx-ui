import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MAutocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import { dataUICMaker } from '../utils';

const Autocomplete = props => {
  const [prevIndex, setPrevIndex] = useState(null);
  const [focused, setFocused] = useState(null);
  const [direction, setDirection] = useState('');
  const { ListboxComponent, disableListWrap, ListboxProps, onHighlightChange, ...rest } = props;

  const handleOnHighlightChange = (e, value, reason) => {
    const focusedEl = document.querySelector('[data-focus="true"]');
    if (e && e.key) {
      setDirection(e.key);
    }
    if (focusedEl !== null) setFocused(focusedEl);
    if (typeof onHighlightChange === 'function') onHighlightChange(e, value, reason);
  };

  useEffect(() => {
    if (focused !== null) {
      const index = parseInt(focused.dataset.optionIndex, 10);
      if (direction === 'ArrowDown' || direction === 'ArrowUp') {
        setPrevIndex(index);
      }
    }
  }, [focused, direction]);

  return ListboxComponent.muiName === 'VirtualizedList' &&
    (disableListWrap === false || disableListWrap === undefined) ? (
    <MAutocomplete
      {...rest}
      ListboxComponent={ListboxComponent}
      ListboxProps={{ ...ListboxProps, prevIndex, direction }}
      onHighlightChange={handleOnHighlightChange}
    />
  ) : (
    <MAutocomplete {...props} />
  );
};

Autocomplete.propTypes = {
  disableListWrap: PropTypes.bool,
  ListboxComponent: PropTypes.elementType,
  ListboxProps: PropTypes.objectOf(PropTypes.any),
  onHighlightChange: PropTypes.func
};

Autocomplete.defaultProps = {
  disableListWrap: undefined,
  ListboxComponent: 'ul',
  ListboxProps: { prevIndex: null, direction: '' },
  onHighlightChange: undefined
};

export default dataUICMaker(Autocomplete, 'Autocomplete');
export { createFilterOptions };
