import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Fx = React.forwardRef(function Fx(props, ref) {
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
      <path d="M14.725 1.96a1.1 1.1 0 110 2.2c-1.538 0-2.74.905-3.712 2.787l.925.002a1.1 1.1 0 01.12 2.193l-.12.007h-1.822c-.243.742-.47 1.57-.682 2.486l-.082.359c-1.263 5.67-3.55 9.52-6.504 10.032a1.1 1.1 0 01-.493-2.14l.117-.028c1.722-.298 3.554-3.32 4.65-7.98l.083-.363c.188-.843.39-1.632.608-2.367h-1.08a1.1 1.1 0 01-.12-2.193l.12-.006h1.85c1.369-3.282 3.284-4.989 6.142-4.989zm6.614 7.958a1.1 1.1 0 010 2.2c-.624 0-1.745 1.187-2.593 2.88l.544 1.684.137.391c.44 1.21.749 1.51 1.367 1.51a1.1 1.1 0 110 2.2c-1.812 0-2.707-.956-3.467-3.05-1.084 1.583-2.486 2.728-3.726 3.021a1.1 1.1 0 01-.621-2.107l.115-.034c.91-.215 2.332-1.612 3.169-3.46l.11-.254.007-.016c-.701-1.897-1.364-2.7-2.175-2.762l-.103-.003a1.1 1.1 0 010-2.2c1.6 0 2.7.834 3.6 2.516 1.06-1.523 2.347-2.516 3.636-2.516z" />
    </svg>
  );
});

Fx.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Fx.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Fx.name = Fx.render.name || 'Fx';

export default Fx;
