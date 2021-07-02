import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const UserPlus = React.forwardRef(function UserPlus(props, ref) {
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
      <path d="M12.677 13.879c2.956 0 5.35 2.263 5.35 5.05v1.98c0 .603-.52 1.091-1.162 1.091-.641 0-1.161-.488-1.161-1.09v-1.98c0-1.587-1.357-2.87-3.027-2.87H5.35c-1.67 0-3.026 1.283-3.026 2.87v1.98c0 .602-.52 1.09-1.162 1.09C.52 22 0 21.512 0 20.91v-1.98c0-2.788 2.393-5.051 5.349-5.051h7.328zm7.02-6.93c.642 0 1.162.489 1.162 1.091V9.92h1.98c.641 0 1.161.489 1.161 1.091 0 .603-.52 1.091-1.161 1.091h-1.98v1.879c0 .602-.52 1.09-1.161 1.09s-1.161-.488-1.161-1.09l-.001-1.879h-1.979c-.641 0-1.161-.488-1.161-1.09 0-.603.52-1.092 1.161-1.092h1.979V8.04c0-.602.52-1.09 1.162-1.09zM9.014 2c2.956 0 5.35 2.263 5.35 5.05 0 2.788-2.394 5.051-5.35 5.051-2.956 0-5.349-2.263-5.349-5.05C3.664 4.263 6.057 2 9.014 2zm0 2.182c-1.67 0-3.026 1.283-3.026 2.869 0 1.585 1.356 2.868 3.026 2.868 1.67 0 3.027-1.283 3.027-2.868 0-1.586-1.357-2.87-3.027-2.87z" />
    </svg>
  );
});

UserPlus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UserPlus.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
UserPlus.name = UserPlus.render.name || 'UserPlus';

export default UserPlus;
