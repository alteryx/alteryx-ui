import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Incognito = React.forwardRef(function Incognito(props, ref) {
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
      <path d="M17.3 14a4 4 0 11-3.847 5.1h-2.906A4.002 4.002 0 012.7 18a4 4 0 017.847-1.1h2.906A4.002 4.002 0 0117.3 14zm0 2.2a1.8 1.8 0 100 3.6 1.8 1.8 0 000-3.6zm-10.6 0a1.8 1.8 0 100 3.6 1.8 1.8 0 000-3.6zM16 2a4.1 4.1 0 014.095 3.895l.005.205-.001 4.699 1.801.001a1.1 1.1 0 01.12 2.194L21.9 13H2.1a1.1 1.1 0 01-.12-2.194l.12-.006 1.799-.001L3.9 6.1a4.1 4.1 0 013.895-4.095L8 2h8zm0 2.2H8a1.9 1.9 0 00-1.894 1.752L6.1 6.1l-.001 4.699h11.8L17.9 6.1a1.9 1.9 0 00-1.752-1.894L16 4.2z" />
    </svg>
  );
});

Incognito.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Incognito.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Incognito.name = Incognito.render.name || 'Incognito';

export default Incognito;
