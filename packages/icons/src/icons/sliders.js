import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Sliders = React.forwardRef(function Sliders(props, ref) {
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
      <path d="M7.052 12.864a1.112 1.112 0 110 2.222H5.195v5.803a1.112 1.112 0 01-2.227 0l.001-5.803H1.113a1.112 1.112 0 110-2.222h5.939zM12 10.89c.615 0 1.113.497 1.113 1.111v8.889a1.112 1.112 0 01-2.227 0V12c0-.614.5-1.111 1.114-1.111zm10.887 3.95a1.112 1.112 0 110 2.223l-1.857-.001v3.828a1.112 1.112 0 01-2.227 0l.001-3.828h-1.856a1.112 1.112 0 110-2.221h5.939zM19.917 2c.615 0 1.114.497 1.114 1.111V12a1.112 1.112 0 01-2.227 0V3.111c0-.614.499-1.111 1.114-1.111zM4.083 2c.615 0 1.114.497 1.114 1.111v6.914c0 .613-.499 1.11-1.114 1.11a1.112 1.112 0 01-1.113-1.11V3.11C2.97 2.497 3.468 2 4.082 2zM12 2c.615 0 1.113.497 1.113 1.111v3.827h1.856a1.112 1.112 0 110 2.222H9.031a1.112 1.112 0 110-2.222h1.855V3.111c0-.614.5-1.111 1.114-1.111z" />
    </svg>
  );
});

Sliders.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Sliders.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Sliders.name = Sliders.render.name || 'Sliders';

export default Sliders;
