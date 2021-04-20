import React from 'react';
import PropTypes from 'prop-types';

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const DragHandle = React.forwardRef(function DragHandle(props, ref) {
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
      <path d="M8.8 16.45a1.95 1.95 0 110 3.9 1.95 1.95 0 010-3.9zm6.4 0a1.95 1.95 0 110 3.9 1.95 1.95 0 010-3.9zm-6.4-6.4a1.95 1.95 0 110 3.9 1.95 1.95 0 010-3.9zm6.4 0a1.95 1.95 0 110 3.9 1.95 1.95 0 010-3.9zm-6.4-6.4a1.95 1.95 0 110 3.9 1.95 1.95 0 010-3.9zm6.4 0a1.95 1.95 0 110 3.9 1.95 1.95 0 010-3.9z" />
    </svg>
  );
});

DragHandle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

DragHandle.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// We should try to find a way to not hard-code these properties, if possible.
DragHandle.name = DragHandle.render.name || 'DragHandle';

export default DragHandle;
