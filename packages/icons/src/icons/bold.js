import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Bold = React.forwardRef(function Bold(props, ref) {
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
      <path d="M13.975 3a5.048 5.048 0 015.041 5.055 5.046 5.046 0 01-1.459 3.556A5.058 5.058 0 0120 15.945 5.048 5.048 0 0114.959 21H6.107A1.108 1.108 0 015 19.89V4.11C5 3.497 5.495 3 6.107 3h7.868zm.984 10.11H7.213v5.67h7.746a2.832 2.832 0 002.828-2.835 2.832 2.832 0 00-2.828-2.835zm-.984-7.89H7.213v5.67h6.762a2.832 2.832 0 002.828-2.835 2.832 2.832 0 00-2.828-2.836z" />
    </svg>
  );
});

Bold.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Bold.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Bold.name = Bold.render.name || 'Bold';

export default Bold;
