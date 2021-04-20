import React from 'react';
import PropTypes from 'prop-types';

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const ChevronsLeft = React.forwardRef(function ChevronsLeft(props, ref) {
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
      <path d="M16.119 12.2a1.1 1.1 0 011.558 0c.43.433.43 1.132 0 1.564l-4.898 4.912a1.1 1.1 0 01-1.558 0l-4.898-4.912a1.108 1.108 0 010-1.563 1.1 1.1 0 011.558 0L12 16.33l4.119-4.13zM12 9.455l4.119-4.13a1.1 1.1 0 011.558 0c.43.431.43 1.131 0 1.563l-4.898 4.912a1.1 1.1 0 01-1.558 0L6.323 6.887a1.108 1.108 0 010-1.563 1.1 1.1 0 011.558 0L12 9.454z" />
    </svg>
  );
});

ChevronsLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ChevronsLeft.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// We should try to find a way to not hard-code these properties, if possible.
ChevronsLeft.name = ChevronsLeft.render.name || 'ChevronsLeft';

export default ChevronsLeft;
