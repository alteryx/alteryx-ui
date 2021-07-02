import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const CloudConnection = React.forwardRef(function CloudConnection(props, ref) {
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
      <path d="M8.152.112a7.851 7.851 0 018.606 4.82l.05.131h.261c2.864 0 5.2 2.264 5.314 5.1l.005.22a5.319 5.319 0 01-5.319 5.318L13.1 15.7v1.99A3.251 3.251 0 0112 24a3.25 3.25 0 01-1.101-6.309L10.9 15.7l-1.424.001a7.85 7.85 0 01-7.802-6.933l-.025-.253A7.85 7.85 0 018.152.112zM6.75 19.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm-3.25 0a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm17 0a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm-3.25 0a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM12 19.7a1.05 1.05 0 100 2.1 1.05 1.05 0 000-2.1zm2.94-13.262a5.65 5.65 0 10-5.465 7.063h7.594a3.119 3.119 0 000-6.238h-1.063a1.1 1.1 0 01-1.065-.825z" />
    </svg>
  );
});

CloudConnection.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CloudConnection.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
CloudConnection.name = CloudConnection.render.name || 'CloudConnection';

export default CloudConnection;
