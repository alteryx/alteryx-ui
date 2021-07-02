import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Unlock = React.forwardRef(function Unlock(props, ref) {
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
      <path d="M17.928 5.85a1.112 1.112 0 01-2.177.443 3.828 3.828 0 00-7.578.767l-.001 2.842h9.754A4.076 4.076 0 0122 13.98v4.942A4.076 4.076 0 0117.926 23H6.074A4.076 4.076 0 012 18.922V13.98c0-2.21 1.757-4.01 3.95-4.076V7.06a6.05 6.05 0 0111.978-1.21zm-.002 6.276H6.074c-1.023 0-1.852.83-1.852 1.854v4.942c0 1.024.83 1.854 1.852 1.854h11.852c1.023 0 1.852-.83 1.852-1.854V13.98c0-1.024-.83-1.854-1.852-1.854zM12 14.968a1.482 1.482 0 11-.001 2.965A1.482 1.482 0 0112 14.968z" />
    </svg>
  );
});

Unlock.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Unlock.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Unlock.name = Unlock.render.name || 'Unlock';

export default Unlock;
