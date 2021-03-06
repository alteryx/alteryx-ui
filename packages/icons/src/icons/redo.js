import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Redo = React.forwardRef(function Redo(props, ref) {
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
      <path d="M21.902 7a1.11 1.11 0 00-1.089.977l-.01.154.002 5.124-2.884-2.787c-3.254-3.344-8.265-4.07-12.29-1.78a10.518 10.518 0 00-4.548 5.246 1.143 1.143 0 00.596 1.477 1.088 1.088 0 001.435-.614 8.278 8.278 0 013.58-4.13c3.063-1.742 6.851-1.267 9.436 1.167l3 2.903-4.746.002a1.11 1.11 0 00-1.088.977l-.01.153c0 .573.413 1.046.95 1.12l.148.011h7.518l.115-.006.155-.029.148-.05.066-.03c.047-.024.095-.053.14-.085l.087-.07.09-.086c.05-.056.093-.115.13-.176l.073-.14a1.15 1.15 0 00.084-.305l.01-.154V8.131C23 7.506 22.508 7 21.902 7z" />
    </svg>
  );
});

Redo.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Redo.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Redo.name = Redo.render.name || 'Redo';

export default Redo;
