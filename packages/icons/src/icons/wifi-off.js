import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const WifiOff = React.forwardRef(function WifiOff(props, ref) {
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
      <path d="M1.9.326L6.95 5.374l.02.02 3.917 3.917c.063.05.12.108.171.171l12.617 12.617a1.113 1.113 0 01-1.575 1.575l-6.503-6.503a1.11 1.11 0 01-.797-.196 4.825 4.825 0 00-5.588 0 1.113 1.113 0 11-1.29-1.815 7.044 7.044 0 014.37-1.297l-2.474-2.474a9.714 9.714 0 00-4.03 2.01 1.113 1.113 0 01-1.429-1.709 11.94 11.94 0 013.667-2.093l-2.1-2.1c-1.33.602-2.563 1.4-3.659 2.368A1.113 1.113 0 01.792 8.197 16.86 16.86 0 014.257 5.83L.327 1.9A1.113 1.113 0 111.9.326zM12 18.68a1.485 1.485 0 110 2.97 1.485 1.485 0 010-2.97zm5.16-8.61c.894.435 1.73.982 2.488 1.625a1.113 1.113 0 01-1.44 1.698 9.714 9.714 0 00-2.025-1.323 1.113 1.113 0 01.977-2zm6.048-1.874a1.113 1.113 0 11-1.474 1.67A14.722 14.722 0 0010.813 6.23a1.113 1.113 0 01-.18-2.22 16.948 16.948 0 0112.575 4.185z" />
    </svg>
  );
});

WifiOff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

WifiOff.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
WifiOff.name = WifiOff.render.name || 'WifiOff';

export default WifiOff;
