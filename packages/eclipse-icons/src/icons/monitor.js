import React from 'react';
import PropTypes from 'prop-types';

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Monitor = React.forwardRef(function Monitor(props, ref) {
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
      <path d="M8.045 22a1.112 1.112 0 110-2.222l2.842-.001v-1.728H5.079A4.076 4.076 0 011 13.975v-7.9A4.076 4.076 0 015.079 2H18.92A4.076 4.076 0 0123 6.074v7.901a4.076 4.076 0 01-4.079 4.074h-5.809v1.728h2.843a1.112 1.112 0 110 2.223h-7.91zM18.92 4.222H5.08c-1.024 0-1.854.83-1.854 1.852v7.901c0 1.023.83 1.852 1.854 1.852H18.92c1.024 0 1.854-.829 1.854-1.852v-7.9c0-1.024-.83-1.853-1.854-1.853z" />
    </svg>
  );
});

Monitor.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Monitor.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// We should try to find a way to not hard-code these properties, if possible.
Monitor.name = Monitor.render.name || 'Monitor';

export default Monitor;
