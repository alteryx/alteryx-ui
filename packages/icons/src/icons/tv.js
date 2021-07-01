import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Tv = React.forwardRef(function Tv(props, ref) {
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
      <path d="M17.73 1.326a1.112 1.112 0 010 1.573l-3.045 3.044h4.236A4.079 4.079 0 0123 10.024v8.898A4.079 4.079 0 0118.921 23H5.08A4.079 4.079 0 011 18.921v-8.899a4.079 4.079 0 014.079-4.078l4.235-.001L6.27 2.899a1.112 1.112 0 011.573-1.573L12 5.483l4.157-4.157a1.112 1.112 0 011.573 0zm1.191 6.843H5.08c-1.024 0-1.854.83-1.854 1.853v8.9c0 1.023.83 1.853 1.854 1.853H18.92c1.024 0 1.854-.83 1.854-1.854v-8.899c0-1.023-.83-1.853-1.854-1.853z" />
    </svg>
  );
});

Tv.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Tv.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Tv.name = Tv.render.name || 'Tv';

export default Tv;
