import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Phone = React.forwardRef(function Phone(props, ref) {
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
      <path d="M21.56 17.364c.012-.51-.338-.924-.804-.99a15.167 15.167 0 01-3.316-.825.947.947 0 00-.996.209l-1.377 1.374a1.221 1.221 0 01-1.465.198 18.549 18.549 0 01-6.962-6.95 1.216 1.216 0 01.198-1.463l1.372-1.37a.947.947 0 00.212-1.001 15.064 15.064 0 01-.824-3.297.951.951 0 00-.96-.814H3.387a.95.95 0 00-.946 1.013 20.189 20.189 0 003.145 8.859 19.916 19.916 0 006.138 6.124 20.237 20.237 0 008.802 3.132.95.95 0 001.034-.952v-3.247zM24 20.606a3.38 3.38 0 01-1.098 2.506 3.403 3.403 0 01-2.617.874 22.686 22.686 0 01-9.878-3.506 22.327 22.327 0 01-6.874-6.858 22.627 22.627 0 01-3.52-9.936 3.378 3.378 0 01.873-2.584A3.391 3.391 0 013.386 0h3.24a3.389 3.389 0 013.39 2.92c.124.948.357 1.879.69 2.772a3.38 3.38 0 01-.767 3.572l-.7.7a16.112 16.112 0 004.78 4.77l.705-.703a3.39 3.39 0 013.571-.762c.898.334 1.83.566 2.79.693A3.384 3.384 0 0124 17.378v3.228z" />
    </svg>
  );
});

Phone.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Phone.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Phone.name = Phone.render.name || 'Phone';

export default Phone;
