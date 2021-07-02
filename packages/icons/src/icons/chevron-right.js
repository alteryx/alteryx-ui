import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const ChevronRight = React.forwardRef(function ChevronRight(props, ref) {
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
      <path d="M13.366 12L8.32 6.887a1.116 1.116 0 010-1.563 1.08 1.08 0 011.542 0l5.818 5.894a1.116 1.116 0 010 1.564l-5.818 5.894a1.08 1.08 0 01-1.542 0 1.116 1.116 0 010-1.563L13.366 12z" />
    </svg>
  );
});

ChevronRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ChevronRight.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
ChevronRight.name = ChevronRight.render.name || 'ChevronRight';

export default ChevronRight;
