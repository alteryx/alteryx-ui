import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const RefreshCw = React.forwardRef(function RefreshCw(props, ref) {
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
      <path d="M6.987 12.898c.615 0 1.114.5 1.114 1.117s-.499 1.117-1.114 1.117H3.815c2.752 3.116 5.474 4.634 8.16 4.634 3.067 0 5.512-1.706 7.425-5.274a1.111 1.111 0 011.507-.454c.542.292.745.97.454 1.513C19.084 19.798 15.926 22 11.976 22c-3.376 0-6.624-1.793-9.75-5.298v3.2c0 .617-.498 1.117-1.113 1.117S0 20.519 0 19.902v-5.887c0-.617.498-1.117 1.113-1.117h5.874zM12.024 2c3.376 0 6.624 1.793 9.75 5.298v-3.2c0-.617.498-1.117 1.113-1.117S24 3.481 24 4.098v5.887c0 .617-.498 1.117-1.113 1.117h-5.874c-.615 0-1.114-.5-1.114-1.117s.499-1.117 1.114-1.117h3.172c-2.752-3.116-5.474-4.634-8.16-4.634-3.067 0-5.512 1.706-7.425 5.274a1.111 1.111 0 01-1.507.454 1.12 1.12 0 01-.454-1.513C4.916 4.202 8.074 2 12.024 2z" />
    </svg>
  );
});

RefreshCw.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

RefreshCw.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
RefreshCw.name = RefreshCw.render.name || 'RefreshCw';

export default RefreshCw;
