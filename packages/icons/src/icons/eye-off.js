import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const EyeOff = React.forwardRef(function EyeOff(props, ref) {
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
      <path d="M1.9.326l5.01 5.01.018.017L23.674 22.1a1.113 1.113 0 11-1.575 1.575l-4.35-4.351A11.102 11.102 0 0112 21.031c-3.384 0-6.342-1.632-8.854-4.31a20.403 20.403 0 01-2.241-2.88 15.146 15.146 0 01-.787-1.343 1.113 1.113 0 01.014-1.024 19.373 19.373 0 014.331-5.436L.326 1.901A1.113 1.113 0 011.901.326zm.487 11.678a18.2 18.2 0 002.384 3.193c2.128 2.27 4.551 3.607 7.21 3.607a8.853 8.853 0 004.143-1.106l-2.114-2.113A4.083 4.083 0 018.415 9.99L6.043 7.616a17.146 17.146 0 00-3.656 4.388zM12 2.97c3.384 0 6.342 1.632 8.854 4.31.86.919 1.608 1.9 2.241 2.88.383.593.646 1.061.787 1.343.162.323.157.704-.013 1.023a19.423 19.423 0 01-2.268 3.349 1.113 1.113 0 01-1.704-1.434 17.196 17.196 0 001.717-2.443 18.2 18.2 0 00-2.385-3.194c-2.128-2.27-4.551-3.607-7.232-3.607a7.913 7.913 0 00-1.822.208 1.113 1.113 0 01-.507-2.168c.765-.18 1.549-.269 2.332-.267zm-1.872 9.564a1.856 1.856 0 002.186 1.356l-2.203-2.203c-.059.275-.055.565.017.847z" />
    </svg>
  );
});

EyeOff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

EyeOff.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
EyeOff.name = EyeOff.render.name || 'EyeOff';

export default EyeOff;
