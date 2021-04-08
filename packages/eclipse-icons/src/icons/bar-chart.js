import React from 'react';
import PropTypes from 'prop-types';

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const BarChart = React.forwardRef(function BarChart(props, ref) {
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
      <path d="M13.105 19.89c0 .613-.495 1.11-1.105 1.11s-1.105-.497-1.105-1.11v-9.863c0-.612.495-1.11 1.105-1.11s1.105.498 1.105 1.11v9.863zm5.895 0c0 .613-.495 1.11-1.105 1.11s-1.106-.497-1.106-1.11V4.11c0-.613.495-1.11 1.106-1.11.61 0 1.105.497 1.105 1.11v15.78zm-11.79 0c0 .613-.494 1.11-1.105 1.11C5.495 21 5 20.503 5 19.89v-3.945c0-.613.495-1.11 1.105-1.11s1.106.497 1.106 1.11v3.945z" />
    </svg>
  );
});

BarChart.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BarChart.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// We should try to find a way to not hard-code these properties, if possible.
BarChart.name = BarChart.render.name || 'BarChart';

export default BarChart;
