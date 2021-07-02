import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const MaximizeDiagonal = React.forwardRef(function MaximizeDiagonal(
  props,
  ref
) {
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
      <path d="M11.076 13.32c.413.412.416 1.079.007 1.488l-3.742 3.741 4.065.02a1.065 1.065 0 011.057 1.057 1.04 1.04 0 01-1.047 1.047l-6.702-.036-.119-.019-.163-.048-.109-.05-.146-.093-.111-.097-.069-.076-.083-.115-.054-.098-.042-.1-.046-.166-.016-.124-.034-6.672a1.04 1.04 0 011.048-1.047 1.065 1.065 0 011.057 1.057l.02 4.063 3.74-3.74a1.052 1.052 0 011.49.007zm1.903-9.597l6.605.031.097.005.119.019.162.048.11.05.146.093.111.097.069.076.083.115.054.098.042.1.046.166.018.19.032 6.606a1.04 1.04 0 01-1.048 1.047 1.065 1.065 0 01-1.057-1.057l-.02-4.066-3.741 3.743a1.052 1.052 0 01-1.488-.007 1.052 1.052 0 01-.007-1.489l3.74-3.741-4.063-.02A1.065 1.065 0 0111.93 4.77a1.04 1.04 0 011.048-1.047z" />
    </svg>
  );
});

MaximizeDiagonal.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MaximizeDiagonal.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
MaximizeDiagonal.name = MaximizeDiagonal.render.name || 'MaximizeDiagonal';

export default MaximizeDiagonal;
