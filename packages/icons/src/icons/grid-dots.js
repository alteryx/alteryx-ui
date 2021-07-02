import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const GridDots = React.forwardRef(function GridDots(props, ref) {
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
      <path d="M3 18.75a2.25 2.25 0 110 4.5 2.25 2.25 0 010-4.5zm9 0a2.25 2.25 0 110 4.5 2.25 2.25 0 010-4.5zm9 0a2.25 2.25 0 110 4.5 2.25 2.25 0 010-4.5zm-18-9a2.25 2.25 0 110 4.5 2.25 2.25 0 010-4.5zm9 0a2.25 2.25 0 110 4.5 2.25 2.25 0 010-4.5zm9 0a2.25 2.25 0 110 4.5 2.25 2.25 0 010-4.5zm-18-9a2.25 2.25 0 110 4.5 2.25 2.25 0 010-4.5zm9 0a2.25 2.25 0 110 4.5 2.25 2.25 0 010-4.5zm9 0a2.25 2.25 0 110 4.5 2.25 2.25 0 010-4.5z" />
    </svg>
  );
});

GridDots.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

GridDots.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
GridDots.name = GridDots.render.name || 'GridDots';

export default GridDots;
