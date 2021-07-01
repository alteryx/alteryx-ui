import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const SkipBack = React.forwardRef(function SkipBack(props, ref) {
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
      <path d="M17.785 6.42L10.819 12l6.966 5.58V6.42zm.415 14.335l-9.846-7.889a1.11 1.11 0 010-1.732L18.2 3.245c.726-.58 1.8-.064 1.8.866V19.89c0 .93-1.074 1.447-1.8.866zM6.215 18.903a1.109 1.109 0 11-2.215 0V5.097a1.109 1.109 0 112.215 0v13.806z" />
    </svg>
  );
});

SkipBack.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SkipBack.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
SkipBack.name = SkipBack.render.name || 'SkipBack';

export default SkipBack;
