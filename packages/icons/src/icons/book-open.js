import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const BookOpen = React.forwardRef(function BookOpen(props, ref) {
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
      <path d="M8.045 2c1.6 0 3.027.74 3.956 1.898A5.054 5.054 0 0115.955 2h5.933C22.502 2 23 2.497 23 3.111v14.815c0 .614-.498 1.111-1.112 1.111h-6.922c-.975 0-1.774.752-1.848 1.707l-.006.145c0 1.481-2.224 1.481-2.224 0 0-1.023-.83-1.852-1.854-1.852H2.112A1.112 1.112 0 011 17.926V3.11C1 2.497 1.498 2 2.112 2h5.933zm0 2.222h-4.82v12.593h5.809c.667 0 1.297.16 1.854.444V7.062a2.841 2.841 0 00-2.843-2.84zm12.73 0h-4.82a2.841 2.841 0 00-2.843 2.84v10.197a4.065 4.065 0 011.854-.444h5.81V4.222z" />
    </svg>
  );
});

BookOpen.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BookOpen.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
BookOpen.name = BookOpen.render.name || 'BookOpen';

export default BookOpen;
