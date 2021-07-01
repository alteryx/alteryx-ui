import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Link2 = React.forwardRef(function Link2(props, ref) {
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
      <path d="M14.97 8.204a1.108 1.108 0 01-1.114-1.102c0-.609.498-1.102 1.113-1.102h2.97c1.607 0 3.149.632 4.286 1.757A5.97 5.97 0 0124 12c0 3.314-2.714 6-6.062 6H14.97a1.108 1.108 0 01-1.113-1.102c0-.609.498-1.102 1.113-1.102h2.97c2.117 0 3.834-1.7 3.834-3.796a3.776 3.776 0 00-1.123-2.684 3.855 3.855 0 00-2.712-1.112H14.97zm-5.94 7.592c.616 0 1.114.493 1.114 1.102 0 .609-.498 1.102-1.113 1.102H6.06a6.094 6.094 0 01-4.286-1.757A5.97 5.97 0 010 12c0-3.314 2.714-6 6.062-6H9.03c.615 0 1.113.493 1.113 1.102 0 .609-.498 1.102-1.113 1.102H6.06c-2.117 0-3.834 1.7-3.834 3.796 0 1.007.404 1.972 1.123 2.684a3.855 3.855 0 002.712 1.112H9.03zm-.989-2.694A1.108 1.108 0 016.928 12c0-.609.498-1.102 1.113-1.102h7.918c.615 0 1.113.493 1.113 1.102 0 .609-.498 1.102-1.113 1.102H8.04z" />
    </svg>
  );
});

Link2.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Link2.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Link2.name = Link2.render.name || 'Link2';

export default Link2;
