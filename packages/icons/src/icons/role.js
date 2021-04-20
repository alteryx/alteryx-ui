import React from 'react';
import PropTypes from 'prop-types';

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Role = React.forwardRef(function Role(props, ref) {
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
      <path d="M17 1a4.1 4.1 0 014.1 4.1v9.461a4.1 4.1 0 01-1.418 3.102l-5 4.323a4.1 4.1 0 01-5.364 0l-5-4.323A4.1 4.1 0 012.9 14.56V5.1A4.1 4.1 0 017 1zm0 2.2H7a1.9 1.9 0 00-1.9 1.9v9.461A1.9 1.9 0 005.757 16l5 4.322a1.9 1.9 0 002.486 0l5-4.322a1.9 1.9 0 00.657-1.438V5.1A1.9 1.9 0 0017 3.2zm-2.016 10.808a1.1 1.1 0 01-.492 1.476c-.815.407-1.65.616-2.492.616-.843 0-1.677-.209-2.492-.616a1.1 1.1 0 01.984-1.968c.518.26 1.017.384 1.508.384.49 0 .99-.125 1.508-.384a1.1 1.1 0 011.476.492zM9.5 6.9a1.1 1.1 0 01.12 2.194L9.5 9.1h-1a1.1 1.1 0 01-.12-2.194L8.5 6.9h1zm6 0a1.1 1.1 0 01.12 2.194l-.12.006h-1a1.1 1.1 0 01-.12-2.194l.12-.006h1z" />
    </svg>
  );
});

Role.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Role.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// We should try to find a way to not hard-code these properties, if possible.
Role.name = Role.render.name || 'Role';

export default Role;
