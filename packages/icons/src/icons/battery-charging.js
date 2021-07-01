import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const BatteryCharging = React.forwardRef(function BatteryCharging(props, ref) {
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
      <path d="M5.072 16.79a1.11 1.11 0 011.114 1.105A1.11 1.11 0 015.072 19h-1.98C1.386 19 0 17.625 0 15.93V8.07C0 6.375 1.385 5 3.093 5H6.25a1.11 1.11 0 011.113 1.105A1.11 1.11 0 016.25 7.211H3.093a.863.863 0 00-.866.86v7.859c0 .475.388.86.866.86h1.98zm9.897-9.58a1.11 1.11 0 01-1.113-1.105c0-.61.498-1.105 1.113-1.105h1.98c1.708 0 3.092 1.375 3.092 3.07v7.86c0 1.695-1.384 3.07-3.093 3.07h-3.157a1.11 1.11 0 01-1.113-1.105c0-.61.498-1.106 1.113-1.106h3.157a.863.863 0 00.866-.86V8.07a.863.863 0 00-.866-.86H14.97zM24 13.446c0 .897-.498 1.625-1.113 1.625s-1.114-.728-1.114-1.625v-2.89c0-.897.499-1.625 1.114-1.625.615 0 1.113.728 1.113 1.625v2.89zm-13.09-.34H7.051c-.89 0-1.42-.984-.927-1.718l3.959-5.895a1.118 1.118 0 011.544-.306 1.1 1.1 0 01.309 1.532l-2.805 4.177h3.858c.889 0 1.42.984.926 1.718l-3.959 5.895a1.118 1.118 0 01-1.544.306 1.1 1.1 0 01-.308-1.532l2.804-4.177z" />
    </svg>
  );
});

BatteryCharging.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BatteryCharging.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
BatteryCharging.name = BatteryCharging.render.name || 'BatteryCharging';

export default BatteryCharging;
