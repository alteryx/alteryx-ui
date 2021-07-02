import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Sorting = React.forwardRef(function Sorting(props, ref) {
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
      <path d="M7.137 8.292c.575 0 1.042.348 1.042.778l-.001 9.477 3.317-3.217a1.065 1.065 0 011.473 0 .99.99 0 010 1.43l-5.094 4.944a1.065 1.065 0 01-1.474 0L1.305 16.76a.99.99 0 010-1.43 1.065 1.065 0 011.474 0l3.315 3.217V9.07c0-.43.467-.778 1.043-.778zM17.6 2.296l5.095 4.944a.99.99 0 010 1.43 1.065 1.065 0 01-1.474 0l-3.316-3.218v9.923c0 .494-.466.895-1.042.895-.575 0-1.042-.4-1.042-.895V5.452L12.505 8.67a1.065 1.065 0 01-1.473 0 .99.99 0 010-1.43l5.094-4.944a1.065 1.065 0 011.474 0z" />
    </svg>
  );
});

Sorting.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Sorting.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Sorting.name = Sorting.render.name || 'Sorting';

export default Sorting;
