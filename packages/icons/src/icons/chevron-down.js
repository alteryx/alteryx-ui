import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const ChevronDown = React.forwardRef(function ChevronDown(props, ref) {
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
      <path d="M12 13.366l5.113-5.046a1.116 1.116 0 011.563 0 1.08 1.08 0 010 1.542l-5.894 5.818a1.116 1.116 0 01-1.564 0L5.324 9.862a1.08 1.08 0 010-1.542 1.116 1.116 0 011.563 0L12 13.366z" />
    </svg>
  );
});

ChevronDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ChevronDown.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
ChevronDown.name = ChevronDown.render.name || 'ChevronDown';

export default ChevronDown;
