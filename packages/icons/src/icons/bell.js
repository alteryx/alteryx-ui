import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Bell = React.forwardRef(function Bell(props, ref) {
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
      <path d="M17.809 13.978V9.034a5.809 5.809 0 00-11.618 0v4.944c0 .667-.16 1.297-.445 1.853h12.508a4.061 4.061 0 01-.445-1.853zm4.079 4.078H2.112c-1.483 0-1.483-2.225 0-2.225 1.024 0 1.854-.83 1.854-1.853V9.034a8.034 8.034 0 0116.068 0v4.944c0 1.023.83 1.853 1.854 1.853 1.483 0 1.483 2.225 0 2.225zm-7.215 3.401a3.09 3.09 0 01-5.346 0c-.43-.742.105-1.67.962-1.67h3.422c.857 0 1.392.928.962 1.67z" />
    </svg>
  );
});

Bell.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Bell.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Bell.name = Bell.render.name || 'Bell';

export default Bell;
