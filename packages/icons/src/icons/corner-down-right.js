import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const CornerDownRight = React.forwardRef(function CornerDownRight(props, ref) {
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
      <path d="M4.11 3c.612 0 1.11.497 1.11 1.11v6.904a2.836 2.836 0 002.835 2.835h9.157l-3.038-3.037a1.11 1.11 0 111.57-1.57l4.931 4.932.02.02c.016.017.032.035.047.054l-.067-.074a1.12 1.12 0 01.267.43 1.107 1.107 0 01-.267 1.14l-4.931 4.931a1.11 1.11 0 11-1.57-1.57l3.037-3.037H8.055A5.055 5.055 0 013 11.014V4.11C3 3.497 3.497 3 4.11 3z" />
    </svg>
  );
});

CornerDownRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CornerDownRight.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
CornerDownRight.name = CornerDownRight.render.name || 'CornerDownRight';

export default CornerDownRight;
