import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const MinimizeVertical = React.forwardRef(function MinimizeVertical(
  props,
  ref
) {
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
      <path d="M12 0c-.61 0-1.103.49-1.103 1.093v5.522L7.884 3.63a1.11 1.11 0 00-1.56 0 1.086 1.086 0 000 1.545l4.971 4.918.101.074.156.085.118.043.176.04.154.01.106-.005.147-.024.112-.032.105-.042.155-.09.104-.08 4.948-4.897c.43-.427.43-1.119 0-1.545a1.11 1.11 0 00-1.56 0l-3.012 2.983-.002-5.52C13.103.489 12.61 0 12 0zm5.677 18.825l-4.897-4.85-.075-.068-.101-.074-.156-.085-.118-.043-.176-.04-.154-.01-.106.005-.147.024-.112.032-.105.042-.155.09-.155.127-4.897 4.85a1.086 1.086 0 000 1.545 1.11 1.11 0 001.56 0l3.014-2.985v5.522c0 .604.494 1.093 1.103 1.093.61 0 1.103-.49 1.103-1.093l.002-5.52 3.011 2.983a1.11 1.11 0 001.56 0c.432-.426.432-1.118 0-1.545z" />
    </svg>
  );
});

MinimizeVertical.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MinimizeVertical.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
MinimizeVertical.name = MinimizeVertical.render.name || 'MinimizeVertical';

export default MinimizeVertical;
