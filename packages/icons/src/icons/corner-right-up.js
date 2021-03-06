import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const CornerRightUp = React.forwardRef(function CornerRightUp(props, ref) {
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
      <path d="M15.08 3.007l.04.005a1.102 1.102 0 01.624.313l4.931 4.931a1.11 1.11 0 11-1.57 1.57l-3.037-3.038v9.157A5.055 5.055 0 0111.014 21H4.11a1.11 1.11 0 110-2.22h6.904a2.836 2.836 0 002.835-2.835V6.787l-3.037 3.039a1.11 1.11 0 01-1.57-1.57l4.932-4.931.02-.02c.017-.016.035-.032.054-.047l-.074.067a1.12 1.12 0 01.635-.315 1.12 1.12 0 01.271-.003z" />
    </svg>
  );
});

CornerRightUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CornerRightUp.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
CornerRightUp.name = CornerRightUp.render.name || 'CornerRightUp';

export default CornerRightUp;
