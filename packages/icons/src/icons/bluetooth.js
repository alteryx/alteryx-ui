import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Bluetooth = React.forwardRef(function Bluetooth(props, ref) {
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
      <path d="M13.604 20.197l2.731-2.755-2.731-2.755v5.51zm2.731-13.64l-2.731-2.754v5.51l2.731-2.755zM10.94 12L6.323 7.345a1.12 1.12 0 010-1.574 1.097 1.097 0 011.561 0l3.512 3.542V1.115c0-.991 1.19-1.488 1.884-.787l5.397 5.443a1.12 1.12 0 010 1.574L14.06 12l4.616 4.655a1.12 1.12 0 010 1.574l-5.397 5.443c-.695.701-1.884.204-1.884-.787v-8.198L7.884 18.23a1.097 1.097 0 01-1.56 0 1.12 1.12 0 010-1.574L10.938 12z" />
    </svg>
  );
});

Bluetooth.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Bluetooth.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Bluetooth.name = Bluetooth.render.name || 'Bluetooth';

export default Bluetooth;
