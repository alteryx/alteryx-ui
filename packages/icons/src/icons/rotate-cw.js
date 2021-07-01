import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const RotateCw = React.forwardRef(function RotateCw(props, ref) {
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
      <path d="M19.052 8.916c-2.86-3.156-5.553-4.694-8.056-4.694A7.776 7.776 0 003.22 12a7.776 7.776 0 0015.018 2.832 1.11 1.11 0 112.07.81A9.998 9.998 0 011 12C1 6.477 5.475 2 10.996 2c3.25 0 6.502 1.866 9.783 5.514V4.056a1.11 1.11 0 112.221 0v5.972a1.11 1.11 0 01-1.11 1.11h-5.807a1.11 1.11 0 010-2.222h2.97z" />
    </svg>
  );
});

RotateCw.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

RotateCw.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
RotateCw.name = RotateCw.render.name || 'RotateCw';

export default RotateCw;
