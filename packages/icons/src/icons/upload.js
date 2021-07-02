import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Upload = React.forwardRef(function Upload(props, ref) {
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
      <path d="M20.889 14.037c.614 0 1.111.547 1.111 1.222v4.346C22 21.48 20.618 23 18.914 23H5.086C3.382 23 2 21.48 2 19.605v-4.346c0-.675.497-1.222 1.111-1.222s1.111.547 1.111 1.222v4.346c0 .525.387.95.864.95h13.828c.477 0 .864-.425.864-.95v-4.346c0-.675.497-1.222 1.11-1.222zM12 1h.018c.026 0 .052.002.079.005L12 1a1.021 1.021 0 01.628.213 1.235 1.235 0 01.158.145l4.938 5.432a1.31 1.31 0 010 1.729 1.041 1.041 0 01-1.571 0L13.11 5.173v10.086c0 .675-.497 1.222-1.111 1.222s-1.111-.547-1.111-1.222l-.001-10.087-3.04 3.347a1.041 1.041 0 01-1.572 0 1.31 1.31 0 010-1.729l4.938-5.432.02-.022.048-.046-.068.068a1.163 1.163 0 01.35-.26A1.044 1.044 0 0112 1z" />
    </svg>
  );
});

Upload.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Upload.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Upload.name = Upload.render.name || 'Upload';

export default Upload;
