import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const UserCheck = React.forwardRef(function UserCheck(props, ref) {
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
      <path d="M17.072 20.889a1.112 1.112 0 01-2.227 0v-1.975A2.842 2.842 0 0012 16.074H5.072a2.842 2.842 0 00-2.845 2.84v1.975c0 .614-.499 1.111-1.114 1.111A1.112 1.112 0 010 20.889v-1.975a5.067 5.067 0 015.072-5.062H12a5.067 5.067 0 015.072 5.062v1.975zm-8.536-8.766a5.067 5.067 0 01-5.072-5.061A5.067 5.067 0 018.536 2a5.067 5.067 0 015.072 5.062 5.067 5.067 0 01-5.072 5.061zm0-2.222a2.842 2.842 0 002.845-2.84 2.842 2.842 0 00-2.845-2.839 2.842 2.842 0 00-2.845 2.84 2.842 2.842 0 002.845 2.84zM22.1 8.251a1.115 1.115 0 011.575 0 1.11 1.11 0 010 1.572l-3.959 3.95a1.115 1.115 0 01-1.574 0l-1.98-1.975a1.11 1.11 0 010-1.571 1.115 1.115 0 011.575 0l1.192 1.19 3.171-3.166z" />
    </svg>
  );
});

UserCheck.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UserCheck.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
UserCheck.name = UserCheck.render.name || 'UserCheck';

export default UserCheck;
