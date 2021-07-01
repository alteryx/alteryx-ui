import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Layers = React.forwardRef(function Layers(props, ref) {
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
      <path d="M11.503 1.117c.313-.156.681-.156.994 0l9.888 4.944c.82.41.82 1.58 0 1.99l-9.888 4.944a1.112 1.112 0 01-.994 0L1.615 8.05c-.82-.41-.82-1.58 0-1.99l9.888-4.944zM12 3.356l-7.4 3.7 7.4 3.7 7.4-3.7-7.4-3.7zm9.39 12.593a1.112 1.112 0 11.995 1.99l-9.888 4.944a1.112 1.112 0 01-.994 0l-9.888-4.944a1.112 1.112 0 01.995-1.99L12 20.644l9.39-4.695zm0-4.944a1.112 1.112 0 11.995 1.99l-9.888 4.944a1.112 1.112 0 01-.994 0l-9.888-4.944a1.112 1.112 0 01.995-1.99L12 15.7l9.39-4.695z" />
    </svg>
  );
});

Layers.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Layers.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Layers.name = Layers.render.name || 'Layers';

export default Layers;
