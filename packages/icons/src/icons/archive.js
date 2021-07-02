import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Archive = React.forwardRef(function Archive(props, ref) {
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
      <path d="M22.887 2C23.502 2 24 2.497 24 3.111V8.05c0 .614-.498 1.111-1.113 1.111h-.867v11.729c0 .614-.498 1.111-1.113 1.111H3.093a1.112 1.112 0 01-1.114-1.111V9.16h-.866A1.112 1.112 0 010 8.05V3.11C0 2.497.498 2 1.113 2h21.774zm-3.094 7.16H4.206v10.618h15.588L19.793 9.16zm-5.814 1.729a1.112 1.112 0 110 2.222h-3.958a1.112 1.112 0 110-2.222h3.958zm7.794-6.667H2.227v2.716h19.546V4.222z" />
    </svg>
  );
});

Archive.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Archive.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Archive.name = Archive.render.name || 'Archive';

export default Archive;
