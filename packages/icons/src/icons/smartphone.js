import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Smartphone = React.forwardRef(function Smartphone(props, ref) {
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
      <path d="M8.062 3.225a1.85 1.85 0 00-1.847 1.854V18.92a1.85 1.85 0 001.847 1.854h7.876a1.85 1.85 0 001.847-1.854V5.08a1.85 1.85 0 00-1.847-1.854H8.062zm0-2.225h7.876A4.07 4.07 0 0120 5.079V18.92A4.07 4.07 0 0115.938 23H8.062A4.07 4.07 0 014 18.921V5.08A4.07 4.07 0 018.062 1zM12 19.416a1.48 1.48 0 001.477-1.483A1.48 1.48 0 0012 16.449a1.48 1.48 0 00-1.477 1.484c0 .819.661 1.483 1.477 1.483z" />
    </svg>
  );
});

Smartphone.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Smartphone.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Smartphone.name = Smartphone.render.name || 'Smartphone';

export default Smartphone;
