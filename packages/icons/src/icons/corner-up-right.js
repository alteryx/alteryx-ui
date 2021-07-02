import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const CornerUpRight = React.forwardRef(function CornerUpRight(props, ref) {
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
      <path d="M15.744 3.325l4.931 4.931.02.02c.016.017.032.035.047.054l-.067-.074a1.12 1.12 0 01.267.43 1.107 1.107 0 01-.267 1.14l-4.931 4.931a1.11 1.11 0 01-1.57-1.569l3.038-3.038H8.055a2.836 2.836 0 00-2.836 2.836v6.904a1.11 1.11 0 01-2.219 0v-6.904a5.055 5.055 0 015.055-5.054l9.156-.001-3.037-3.037a1.11 1.11 0 111.57-1.569z" />
    </svg>
  );
});

CornerUpRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CornerUpRight.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
CornerUpRight.name = CornerUpRight.render.name || 'CornerUpRight';

export default CornerUpRight;
