import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Terminal = React.forwardRef(function Terminal(props, ref) {
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
      <path d="M8.458 11.015L3.325 5.891a1.106 1.106 0 010-1.567 1.11 1.11 0 011.57 0l5.917 5.908a1.106 1.106 0 010 1.567l-5.918 5.907a1.11 1.11 0 01-1.569 0 1.106 1.106 0 010-1.566l5.133-5.125zM12 20a1.109 1.109 0 110-2.215h7.89a1.109 1.109 0 110 2.215H12z" />
    </svg>
  );
});

Terminal.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Terminal.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Terminal.name = Terminal.render.name || 'Terminal';

export default Terminal;
