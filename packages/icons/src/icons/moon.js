import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Moon = React.forwardRef(function Moon(props, ref) {
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
      <path d="M11.084 12.916a8.042 8.042 0 01-1.962-8.17 7.792 7.792 0 1010.132 10.132 8.042 8.042 0 01-8.17-1.962zm10.91-.013A10.019 10.019 0 1111.098 2.005c.957-.088 1.569.997.997 1.77a5.813 5.813 0 008.13 8.13c.774-.571 1.86.04 1.77.998z" />
    </svg>
  );
});

Moon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Moon.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Moon.name = Moon.render.name || 'Moon';

export default Moon;
