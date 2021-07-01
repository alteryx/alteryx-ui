import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Anchor = React.forwardRef(function Anchor(props, ref) {
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
      <path d="M12 1a4.079 4.079 0 011.113 8.004v11.701a8.78 8.78 0 007.592-7.593h-1.784a1.112 1.112 0 010-2.224h2.967c.614 0 1.112.498 1.112 1.112 0 5.979-4.77 10.843-10.712 10.996L12 23C5.925 23 1 18.075 1 12c0-.614.498-1.112 1.112-1.112H5.08a1.112 1.112 0 010 2.224H3.295a8.78 8.78 0 007.592 7.593V9.004A4.08 4.08 0 0112 1zm0 2.225a1.854 1.854 0 100 3.708 1.854 1.854 0 000-3.708z" />
    </svg>
  );
});

Anchor.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Anchor.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Anchor.name = Anchor.render.name || 'Anchor';

export default Anchor;
