import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const ThumbsDown = React.forwardRef(function ThumbsDown(props, ref) {
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
      <path d="M19.514 1c1.748-.03 3.242 1.234 3.476 2.941l.01.15v6.92l-.01.15c-.234 1.707-1.728 2.97-3.456 2.94H17.59l-3.714 8.238a1.13 1.13 0 01-1.031.661c-2.285 0-4.138-1.826-4.138-4.079V16.08H4.17a3.155 3.155 0 01-2.4-1.062 3.06 3.06 0 01-.734-2.493L2.42 3.627C2.654 2.103 3.99.983 5.54 1h13.973zm-3.786 2.225h-10.2a.875.875 0 00-.877.737L3.267 12.86a.857.857 0 00.205.698.89.89 0 00.685.297h5.678a1.12 1.12 0 011.128 1.112v3.955c0 .789.5 1.462 1.203 1.73l3.562-7.898V3.225zm3.806 0h-1.55v8.652h1.57a1.185 1.185 0 001.19-.953V4.177a1.191 1.191 0 00-1.21-.952z" />
    </svg>
  );
});

ThumbsDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ThumbsDown.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
ThumbsDown.name = ThumbsDown.render.name || 'ThumbsDown';

export default ThumbsDown;
