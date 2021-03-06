import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const BellOff = React.forwardRef(function BellOff(props, ref) {
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
      <path d="M2.742 1.299l19.96 19.959a1.02 1.02 0 11-1.444 1.443l-5.146-5.145H2.928c-1.361 0-1.361-2.04 0-2.04.94 0 1.7-.762 1.7-1.702V9.28a7.371 7.371 0 01.509-2.699L1.299 2.742A1.02 1.02 0 012.742 1.3zm11.34 17.983c.487.283.653.907.37 1.395a2.835 2.835 0 01-4.904 0 1.02 1.02 0 111.765-1.024.794.794 0 001.374 0 1.02 1.02 0 011.395-.37zm-.011-3.767L6.775 8.22c-.07.347-.105.702-.105 1.058v4.536c0 .613-.147 1.191-.408 1.701h7.809zm1.648-12.604a7.37 7.37 0 013.652 6.367v3.63a1.02 1.02 0 01-2.041 0v-3.63a5.33 5.33 0 00-7.95-4.645 1.02 1.02 0 11-1.002-1.778 7.371 7.371 0 017.34.056z" />
    </svg>
  );
});

BellOff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BellOff.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
BellOff.name = BellOff.render.name || 'BellOff';

export default BellOff;
