import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Filter = React.forwardRef(function Filter(props, ref) {
  const { color, size, ...otherProps } = props;
  const variantSizes = {
    xsmall: 12,
    small: 14,
    medium: 16,
    large: 20,
    xlarge: 28,
    xxlarge: 36,
  };

  const newSize = !isNaN(parseInt(size, 10))
    ? size
    : variantSizes[size] !== undefined
    ? variantSizes[size]
    : variantSizes['medium'];

  return (
    <svg
      width={newSize}
      height={newSize}
      viewBox="0 0 24 24"
      {...otherProps}
      fill={color}
      ref={ref}
    >
      <path d="M8.91 12.86L1.266 3.828C.654 3.106 1.168 2 2.115 2h19.77c.947 0 1.461 1.106.85 1.828l-7.646 9.032v8.028c0 .825-.87 1.363-1.61.993l-3.954-1.975a1.11 1.11 0 01-.614-.994V12.86zM19.49 4.222H4.51l6.361 7.514c.17.2.263.455.263.718v5.772l1.73.864v-6.636c0-.263.093-.517.263-.718l6.36-7.514z" />
    </svg>
  );
});

Filter.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Filter.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Filter.name = Filter.render.name || 'Filter';

export default Filter;
