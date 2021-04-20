import React from 'react';
import PropTypes from 'prop-types';

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const ToggleLeft = React.forwardRef(function ToggleLeft(props, ref) {
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
      <path d="M8.041 4h7.918C20.399 4 24 7.582 24 12s-3.6 8-8.041 8H8.04C3.601 20 0 16.418 0 12s3.6-8 8.041-8zm0 2.215c-3.211 0-5.814 2.59-5.814 5.785 0 3.195 2.603 5.785 5.814 5.785h7.918c3.211 0 5.814-2.59 5.814-5.785 0-3.195-2.603-5.785-5.814-5.785H8.04zm0 9.847c-2.254 0-4.082-1.819-4.082-4.062 0-2.243 1.828-4.062 4.082-4.062 2.255 0 4.083 1.819 4.083 4.062 0 2.243-1.828 4.062-4.083 4.062zm0-2.216A1.85 1.85 0 009.897 12a1.85 1.85 0 00-1.856-1.846A1.85 1.85 0 006.186 12c0 1.02.83 1.846 1.855 1.846z" />
    </svg>
  );
});

ToggleLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ToggleLeft.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// We should try to find a way to not hard-code these properties, if possible.
ToggleLeft.name = ToggleLeft.render.name || 'ToggleLeft';

export default ToggleLeft;
