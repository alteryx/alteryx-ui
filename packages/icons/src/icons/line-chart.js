import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const LineChart = React.forwardRef(function LineChart(props, ref) {
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

  console.warn(
    'The icon LineChart is deprecated and will be removed in a future major release.'
  );

  return (
    <svg
      width={newSize}
      height={newSize}
      viewBox="0 0 24 24"
      {...otherProps}
      fill={color}
      ref={ref}
    >
      <path d="M2.13793103,1 C2.71402116,1 3.19012422,1.42809554 3.2654741,1.98352053 L3.27586207,2.13793103 L3.27586207,20.7241379 L21.862069,20.7241379 C22.4381591,20.7241379 22.9142621,21.1522335 22.989612,21.7076585 L23,21.862069 C23,22.4381591 22.5719045,22.9142621 22.0164795,22.989612 L21.862069,23 L2.13793103,23 C1.56184091,23 1.08573785,22.5719045 1.01038797,22.0164795 L1,21.862069 L1,2.13793103 C1,1.50946908 1.50946908,1 2.13793103,1 Z M21.639244,4.92698064 L21.7816253,5.01729087 C22.2404006,5.35779359 22.3692701,5.97778736 22.1075021,6.46685257 L22.0171919,6.60923385 L16.9597206,13.4234023 C16.6244283,13.8751574 16.0168126,14.0080333 15.529835,13.75952 L15.3877538,13.6734619 L11.227713,10.7240112 L6.83597814,16.4830014 C6.45496419,16.9827942 5.74092927,17.0790834 5.24113652,16.6980695 C4.78677947,16.3516931 4.66589639,15.7300929 4.93393409,15.2444356 L5.02606847,15.1032278 L10.0835397,8.4691204 C10.4214831,8.02582529 11.023489,7.89841297 11.5059412,8.14537957 L11.6467066,8.23075942 L15.7961268,11.1731146 L20.1896823,5.25285746 C20.530185,4.79408216 21.1501788,4.66521271 21.639244,4.92698064 Z" />
    </svg>
  );
});

LineChart.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

LineChart.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
LineChart.name = LineChart.render.name || 'LineChart';

export default LineChart;
