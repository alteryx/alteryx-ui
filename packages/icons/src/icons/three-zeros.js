import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const ThreeZeros = React.forwardRef(function ThreeZeros(props, ref) {
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
      <path d="M19.4 6.5c2.659 0 3.6 2.13 3.6 5.5s-.941 5.5-3.6 5.5c-2.659 0-3.6-2.13-3.6-5.5s.941-5.5 3.6-5.5zm-14.8 0c2.659 0 3.6 2.13 3.6 5.5s-.941 5.5-3.6 5.5C1.941 17.5 1 15.37 1 12l.002-.263C1.051 8.52 2.012 6.5 4.6 6.5zm7.4 0c2.659 0 3.6 2.13 3.6 5.5s-.941 5.5-3.6 5.5c-2.659 0-3.6-2.13-3.6-5.5l.002-.263C8.451 8.52 9.412 6.5 12 6.5zm7.4 2.2c-.953 0-1.4 1.013-1.4 3.3l.002.249c.032 2.112.48 3.051 1.398 3.051.953 0 1.4-1.013 1.4-3.3l-.002-.249C20.766 9.64 20.318 8.7 19.4 8.7zm-14.8 0c-.953 0-1.4 1.013-1.4 3.3l.002.249c.032 2.112.48 3.051 1.398 3.051.953 0 1.4-1.013 1.4-3.3s-.447-3.3-1.4-3.3zm7.4 0c-.953 0-1.4 1.013-1.4 3.3l.002.249c.032 2.112.48 3.051 1.398 3.051.953 0 1.4-1.013 1.4-3.3s-.447-3.3-1.4-3.3z" />
    </svg>
  );
});

ThreeZeros.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ThreeZeros.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
ThreeZeros.name = ThreeZeros.render.name || 'ThreeZeros';

export default ThreeZeros;
