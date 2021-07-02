import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const CheckSquare = React.forwardRef(function CheckSquare(props, ref) {
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
      <path d="M20.802 3.316a1.11 1.11 0 011.572 0c.435.435.435 1.14 0 1.575l-9.882 9.899a1.11 1.11 0 01-1.572 0l-2.965-2.97a1.115 1.115 0 010-1.575 1.11 1.11 0 011.572 0l2.179 2.183 9.096-9.112zm-1.314 8.707a1.113 1.113 0 112.224 0v6.929a3.09 3.09 0 01-3.088 3.093H4.788A3.09 3.09 0 011.7 18.952V5.093A3.09 3.09 0 014.788 2h10.87a1.113 1.113 0 010 2.227H4.789a.865.865 0 00-.864.866v13.859c0 .478.387.866.864.866h13.836a.865.865 0 00.864-.866v-6.93z" />
    </svg>
  );
});

CheckSquare.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CheckSquare.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
CheckSquare.name = CheckSquare.render.name || 'CheckSquare';

export default CheckSquare;
