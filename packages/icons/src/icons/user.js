import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const User = React.forwardRef(function User(props, ref) {
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
      <path d="M21 20.889a1.11 1.11 0 11-2.22 0v-1.975c0-1.569-1.269-2.84-2.835-2.84h-7.89a2.838 2.838 0 00-2.836 2.84v1.975a1.11 1.11 0 11-2.219 0v-1.975a5.058 5.058 0 015.055-5.062h7.89A5.058 5.058 0 0121 18.914v1.975zm-9-8.766a5.058 5.058 0 01-5.055-5.061A5.058 5.058 0 0112 2a5.058 5.058 0 015.055 5.062A5.058 5.058 0 0112 12.123zm0-2.222a2.838 2.838 0 002.836-2.84c0-1.567-1.27-2.839-2.836-2.839a2.838 2.838 0 00-2.836 2.84c0 1.568 1.27 2.84 2.836 2.84z" />
    </svg>
  );
});

User.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

User.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
User.name = User.render.name || 'User';

export default User;
