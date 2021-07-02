import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const PieChart = React.forwardRef(function PieChart(props, ref) {
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
      <path d="M20.082 15.416a1.112 1.112 0 112.05.866A11 11 0 011.11 13.543 11.003 11.003 0 017.6 1.913a1.112 1.112 0 11.89 2.04 8.777 8.777 0 002.377 16.748 8.775 8.775 0 009.215-5.285zM23 12.002c0 .615-.498 1.113-1.112 1.113H12a1.112 1.112 0 01-1.112-1.113v-9.89C10.888 1.499 11.386 1 12 1a10.998 10.998 0 0111 11.002zm-4.795-6.206a8.774 8.774 0 00-5.092-2.5v7.593h7.592a8.778 8.778 0 00-2.5-5.093z" />
    </svg>
  );
});

PieChart.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

PieChart.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
PieChart.name = PieChart.render.name || 'PieChart';

export default PieChart;
