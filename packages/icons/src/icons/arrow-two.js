import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const ArrowTwo = React.forwardRef(function ArrowTwo(props, ref) {
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
      <path d="M17.033 7.297l6.654 6.864c.417.43.417 1.13 0 1.56l-6.654 6.864c-.417.43-1.094.43-1.512 0a1.128 1.128 0 010-1.56l4.827-4.981h-7.245a1.103 1.103 0 110-2.206l7.246-.001-4.828-4.98a1.128 1.128 0 010-1.56 1.046 1.046 0 011.512 0zM8.48 1.413c.417.43.417 1.13 0 1.56L3.65 7.954h7.247a1.103 1.103 0 010 2.206H3.65l4.829 4.981c.417.431.417 1.13 0 1.56-.418.431-1.095.431-1.512 0L.313 9.838a1.128 1.128 0 010-1.56l6.654-6.864a1.046 1.046 0 011.512 0z" />
    </svg>
  );
});

ArrowTwo.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowTwo.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
ArrowTwo.name = ArrowTwo.render.name || 'ArrowTwo';

export default ArrowTwo;
