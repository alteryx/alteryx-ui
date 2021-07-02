import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const MinimizeDiagonal = React.forwardRef(function MinimizeDiagonal(
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
      <path d="M4.066 20.33c.413.413 1.079.416 1.488.007l3.741-3.742.02 4.065a1.065 1.065 0 001.057 1.057 1.04 1.04 0 001.047-1.047l-.036-6.703-.018-.118-.05-.163-.049-.109-.093-.147-.097-.11-.075-.07-.116-.082-.098-.055-.1-.042-.165-.045-.125-.016-6.671-.034a1.04 1.04 0 00-1.048 1.047 1.065 1.065 0 001.058 1.058l4.062.02-3.74 3.74a1.052 1.052 0 00.008 1.489zm8.91-16.604l.031 6.605.005.098.018.118.049.163.05.109.093.147.097.11.075.07.115.082.099.055.1.042.165.045.191.018 6.605.032a1.04 1.04 0 001.047-1.047 1.065 1.065 0 00-1.057-1.058l-4.065-.02 3.742-3.74a1.052 1.052 0 00-.007-1.489 1.052 1.052 0 00-1.488-.007L15.1 7.8l-.02-4.063a1.065 1.065 0 00-1.057-1.057 1.04 1.04 0 00-1.048 1.047z" />
    </svg>
  );
});

MinimizeDiagonal.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MinimizeDiagonal.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
MinimizeDiagonal.name = MinimizeDiagonal.render.name || 'MinimizeDiagonal';

export default MinimizeDiagonal;
