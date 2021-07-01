import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const XCurvy = React.forwardRef(function XCurvy(props, ref) {
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
      <path d="M18.73 3.6a1.1 1.1 0 01.12 2.194l-.12.006c-1.456 0-3.625 2.311-5.178 5.546l.158.474c.176.547.57 1.787.772 2.408l.084.252c.964 2.864 1.68 3.715 3.245 3.715a1.1 1.1 0 010 2.2c-2.717 0-4.023-1.464-5.227-4.912l-.183-.543-.223-.689c-1.8 3.207-4.442 5.592-6.655 6.115a1.1 1.1 0 11-.506-2.141c1.808-.428 4.42-3.008 5.91-6.381l.136-.319.124-.295C9.814 7.411 8.443 5.8 6.543 5.8a1.1 1.1 0 110-2.2c2.677 0 4.462 1.634 5.97 5.021C14.302 5.628 16.58 3.6 18.73 3.6z" />
    </svg>
  );
});

XCurvy.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

XCurvy.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
XCurvy.name = XCurvy.render.name || 'XCurvy';

export default XCurvy;
