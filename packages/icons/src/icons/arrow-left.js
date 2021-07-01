import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const ArrowLeft = React.forwardRef(function ArrowLeft(props, ref) {
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
      <path d="M4.166 12.583l-.007-.01a1.108 1.108 0 01-.008-.014l-.045-.086a1.1 1.1 0 01-.028-.065 1.112 1.112 0 01.028-.881l.045-.086a1.108 1.108 0 01.015-.024l.048-.071a1.112 1.112 0 01.11-.13l6.893-6.892a1.108 1.108 0 111.566 1.567l-5.001 5.001h11.11a1.108 1.108 0 110 2.216l-11.111-.001 5.002 5.002a1.108 1.108 0 11-1.566 1.567l-6.893-6.893-.016-.017c-.02-.02-.038-.04-.055-.062l.071.08a1.118 1.118 0 01-.11-.13l-.048-.071z" />
    </svg>
  );
});

ArrowLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowLeft.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
ArrowLeft.name = ArrowLeft.render.name || 'ArrowLeft';

export default ArrowLeft;
