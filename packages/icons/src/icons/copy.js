import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Copy = React.forwardRef(function Copy(props, ref) {
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
      <path d="M12 10.146c-1.024 0-1.854.83-1.854 1.854v6.921c0 1.024.83 1.854 1.854 1.854h6.921c1.024 0 1.854-.83 1.854-1.854V12c0-1.024-.83-1.854-1.854-1.854H12zm0-2.225h6.921A4.079 4.079 0 0123 12v6.921A4.079 4.079 0 0118.921 23H12a4.079 4.079 0 01-4.079-4.079V12A4.079 4.079 0 0112 7.921zm-6.921 5.933a1.112 1.112 0 110 2.225h-.99A3.09 3.09 0 011 12.989v-8.9A3.09 3.09 0 014.09 1h8.899a3.09 3.09 0 013.09 3.09v.989a1.112 1.112 0 11-2.225 0v-.99a.865.865 0 00-.865-.864h-8.9a.865.865 0 00-.864.865v8.899c0 .478.387.865.865.865h.989z" />
    </svg>
  );
});

Copy.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Copy.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Copy.name = Copy.render.name || 'Copy';

export default Copy;
