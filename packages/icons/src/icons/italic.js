import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Italic = React.forwardRef(function Italic(props, ref) {
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
      <path d="M5.108 21a1.109 1.109 0 010-2.22h3.17l5.077-13.561h-3.324a1.109 1.109 0 010-2.219h8.861a1.109 1.109 0 010 2.22l-3.171-.001-5.077 13.561h3.325a1.109 1.109 0 010 2.22H5.108z" />
    </svg>
  );
});

Italic.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Italic.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Italic.name = Italic.render.name || 'Italic';

export default Italic;
