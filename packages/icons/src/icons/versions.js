import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Versions = React.forwardRef(function Versions(props, ref) {
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
      <path d="M13.5 5.25a.75.75 0 00-.75.75v12c0 .414.336.75.75.75H21a.75.75 0 00.75-.75V6a.75.75 0 00-.75-.75h-7.5zM21 3a3 3 0 013 3v12a3 3 0 01-3 3h-7.5c-1.11 0-2.08-.603-2.598-1.5H7.5c-1.11 0-2.08-.603-2.598-1.5H3a3 3 0 01-3-3V9a3 3 0 013-3h1.901A2.999 2.999 0 017.5 4.5h3.401A2.999 2.999 0 0113.5 3H21zM10.5 6.75h-3a.75.75 0 00-.75.75v9c0 .414.336.75.75.75h3V6.75zm-6 9v-7.5H3a.75.75 0 00-.75.75v6c0 .414.336.75.75.75h1.5z" />
    </svg>
  );
});

Versions.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Versions.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Versions.name = Versions.render.name || 'Versions';

export default Versions;
