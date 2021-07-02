import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const MaximizeHorizontal = React.forwardRef(function MaximizeHorizontal(
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
      <path d="M10.345 12c0 .61-.489 1.103-1.093 1.103H3.731l2.985 3.013a1.11 1.11 0 010 1.56c-.427.432-1.12.432-1.546 0L.252 12.706l-.074-.101-.084-.156-.044-.118-.04-.176L0 12l.005-.106.024-.147.032-.112.043-.105.088-.155.08-.104L5.17 6.323a1.086 1.086 0 011.546 0 1.11 1.11 0 010 1.56l-2.983 3.012 5.52.002c.603 0 1.092.494 1.092 1.103zm8.485-5.677l4.85 4.897.068.075.074.101.084.156.044.118.04.176L24 12l-.005.106-.024.147-.032.112-.043.105-.088.155-.128.155-4.85 4.897c-.427.43-1.119.43-1.546 0a1.11 1.11 0 010-1.56l2.985-3.014h-5.521A1.098 1.098 0 0113.655 12c0-.61.489-1.103 1.093-1.103l5.52-.002-2.984-3.011a1.11 1.11 0 010-1.56 1.086 1.086 0 011.546 0z" />
    </svg>
  );
});

MaximizeHorizontal.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MaximizeHorizontal.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
MaximizeHorizontal.name =
  MaximizeHorizontal.render.name || 'MaximizeHorizontal';

export default MaximizeHorizontal;
