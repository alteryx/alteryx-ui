import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Trash = React.forwardRef(function Trash(props, ref) {
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
      <path d="M13.975 1a3.088 3.088 0 013.087 3.09l-.001.865h3.828a1.112 1.112 0 010 2.225l-.865-.001V19.91A3.088 3.088 0 0116.939 23H7.062a3.088 3.088 0 01-3.087-3.09V7.18h-.864a1.112 1.112 0 010-2.224h3.827V4.09A3.088 3.088 0 0110.025 1h3.95zm3.827 6.179H6.197V19.91c0 .478.387.865.865.865h9.876a.865.865 0 00.864-.865V7.18zm-3.827-3.954h-3.95a.865.865 0 00-.865.865v.865h5.679V4.09a.865.865 0 00-.864-.865z" />
    </svg>
  );
});

Trash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Trash.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Trash.name = Trash.render.name || 'Trash';

export default Trash;
