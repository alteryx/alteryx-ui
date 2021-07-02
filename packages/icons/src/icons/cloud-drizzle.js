import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const CloudDrizzle = React.forwardRef(function CloudDrizzle(props, ref) {
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
      <path d="M6.934 18.927a1.113 1.113 0 112.227 0v1.979a1.113 1.113 0 11-2.227 0v-1.98zm0-5.938a1.113 1.113 0 112.227 0v1.98a1.113 1.113 0 11-2.227 0v-1.98zm7.917 5.938a1.113 1.113 0 012.227 0v1.979a1.113 1.113 0 01-2.227 0v-1.98zm0-5.938a1.113 1.113 0 012.227 0v1.98a1.113 1.113 0 11-2.227 0v-1.98zm-3.959 7.917a1.113 1.113 0 012.227 0v1.98a1.113 1.113 0 01-2.227 0v-1.98zm0-5.938a1.113 1.113 0 012.227 0v1.98a1.113 1.113 0 01-2.227 0v-1.98zm7.053-9.03a6.062 6.062 0 012.425 11.614 1.113 1.113 0 11-.894-2.04 3.835 3.835 0 00-1.532-7.348h-1.247c-.508 0-.951-.343-1.078-.835a6.804 6.804 0 10-10.835 7.017 1.113 1.113 0 11-1.39 1.74A9.03 9.03 0 1117.516 5.937h.429z" />
    </svg>
  );
});

CloudDrizzle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CloudDrizzle.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
CloudDrizzle.name = CloudDrizzle.render.name || 'CloudDrizzle';

export default CloudDrizzle;
