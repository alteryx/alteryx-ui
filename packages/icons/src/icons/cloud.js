import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Cloud = React.forwardRef(function Cloud(props, ref) {
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
      <path d="M17.512 8.919h.428c3.347 0 6.06 2.704 6.06 6.04S21.287 21 17.94 21H9.036C4.343 21.003.43 17.423.033 12.762c-.397-4.66 2.854-8.848 7.48-9.633 4.336-.736 8.525 1.746 10 5.79zm.428 2.219h-1.247c-.508 0-.95-.343-1.078-.833-.884-3.412-4.243-5.58-7.728-4.989-3.486.592-5.935 3.747-5.636 7.258.3 3.512 3.247 6.21 6.784 6.207h8.905a3.828 3.828 0 003.834-3.822 3.828 3.828 0 00-3.834-3.821z" />
    </svg>
  );
});

Cloud.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Cloud.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Cloud.name = Cloud.render.name || 'Cloud';

export default Cloud;
