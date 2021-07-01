import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const ChevronLeft = React.forwardRef(function ChevronLeft(props, ref) {
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
      <path d="M10.634 12l5.046 5.113a1.116 1.116 0 010 1.563 1.08 1.08 0 01-1.542 0L8.32 12.782a1.116 1.116 0 010-1.564l5.818-5.894a1.08 1.08 0 011.542 0 1.116 1.116 0 010 1.563L10.634 12z" />
    </svg>
  );
});

ChevronLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ChevronLeft.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
ChevronLeft.name = ChevronLeft.render.name || 'ChevronLeft';

export default ChevronLeft;
