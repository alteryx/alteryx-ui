import React from 'react';
import PropTypes from 'prop-types';

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const MinimizeHorizontal = React.forwardRef(function MinimizeHorizontal(
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
      <path d="M0 12c0 .61.49 1.103 1.093 1.103h5.522L3.63 16.116a1.11 1.11 0 000 1.56c.426.432 1.118.432 1.545 0l4.918-4.971.074-.101.085-.156.043-.118.04-.176.01-.154-.005-.106-.024-.147-.032-.112-.042-.105-.09-.155-.08-.104-4.897-4.948a1.086 1.086 0 00-1.545 0 1.11 1.11 0 000 1.56l2.983 3.012-5.52.002C.489 10.897 0 11.39 0 12zm18.825-5.677l-4.85 4.897-.068.075-.074.101-.085.156-.043.118-.04.176-.01.154.005.106.024.147.032.112.042.105.09.155.127.155 4.85 4.897c.427.43 1.119.43 1.545 0a1.11 1.11 0 000-1.56l-2.985-3.014h5.522C23.511 13.103 24 12.61 24 12c0-.61-.49-1.103-1.093-1.103l-5.52-.002 2.983-3.011a1.11 1.11 0 000-1.56 1.086 1.086 0 00-1.545 0z" />
    </svg>
  );
});

MinimizeHorizontal.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MinimizeHorizontal.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// We should try to find a way to not hard-code these properties, if possible.
MinimizeHorizontal.name =
  MinimizeHorizontal.render.name || 'MinimizeHorizontal';

export default MinimizeHorizontal;
