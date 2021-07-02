import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const CornerUpLeft = React.forwardRef(function CornerUpLeft(props, ref) {
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
      <path d="M9.826 13.188a1.11 1.11 0 01-1.57 1.57L3.325 9.825l-.02-.02a1.116 1.116 0 01-.047-.054l.067.074a1.12 1.12 0 01-.168-.216 1.105 1.105 0 01.168-1.354l4.931-4.931a1.11 1.11 0 111.57 1.57L6.788 7.93h9.157A5.055 5.055 0 0121 12.987v6.904a1.11 1.11 0 11-2.22 0v-6.904a2.836 2.836 0 00-2.835-2.835l-9.158-.001 3.039 3.038z" />
    </svg>
  );
});

CornerUpLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CornerUpLeft.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
CornerUpLeft.name = CornerUpLeft.render.name || 'CornerUpLeft';

export default CornerUpLeft;
