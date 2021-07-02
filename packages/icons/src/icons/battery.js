import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Battery = React.forwardRef(function Battery(props, ref) {
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
      <path d="M4.082 7.21a1.849 1.849 0 00-1.855 1.843v5.894c0 1.018.83 1.842 1.855 1.842H15.96a1.849 1.849 0 001.855-1.842V9.053c0-1.018-.83-1.842-1.855-1.842H4.082zm0-2.21H15.96c2.254 0 4.082 1.814 4.082 4.053v5.894c0 2.239-1.828 4.053-4.082 4.053H4.082C1.828 19 0 17.186 0 14.947V9.053C0 6.814 1.828 5 4.082 5zM24 14.217a1.11 1.11 0 01-1.113 1.106 1.11 1.11 0 01-1.114-1.106V9.78c0-.61.499-1.105 1.114-1.105A1.11 1.11 0 0124 9.78v4.437z" />
    </svg>
  );
});

Battery.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Battery.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Battery.name = Battery.render.name || 'Battery';

export default Battery;
