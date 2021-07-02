import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Edit3 = React.forwardRef(function Edit3(props, ref) {
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
      <path d="M4.222 13.45v2.381h2.38l9.753-9.764-2.38-2.382-9.753 9.765zM14.761 1.326l3.95 3.955a1.113 1.113 0 010 1.573L7.848 17.73a1.11 1.11 0 01-.785.326h-3.95A1.112 1.112 0 012 16.944v-3.955c0-.295.117-.578.325-.787L13.19 1.326a1.11 1.11 0 011.571 0zM3.111 23a1.112 1.112 0 010-2.225H20.89a1.112 1.112 0 010 2.225H3.11z" />
    </svg>
  );
});

Edit3.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Edit3.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Edit3.name = Edit3.render.name || 'Edit3';

export default Edit3;
