import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Axes = React.forwardRef(function Axes(props, ref) {
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
      <path d="M17.926 2A4.074 4.074 0 0122 6.074v11.852A4.074 4.074 0 0117.926 22H6.074A4.074 4.074 0 012 17.926V6.074A4.074 4.074 0 016.074 2h11.852zm-7.038 11.111H4.222v4.815c0 1.023.83 1.852 1.852 1.852l4.814-.001v-6.666zm8.889 0h-6.666v6.666h4.815c1.023 0 1.852-.828 1.852-1.851l-.001-4.815zm-8.889-8.889H6.074c-1.023 0-1.852.83-1.852 1.852v4.814h6.666V4.222zm7.038 0H13.11v6.666h6.666V6.074c0-1.023-.828-1.852-1.851-1.852z" />
    </svg>
  );
});

Axes.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Axes.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Axes.name = Axes.render.name || 'Axes';

export default Axes;
