import React from 'react';
import PropTypes from 'prop-types';

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const ChevronsUp = React.forwardRef(function ChevronsUp(props, ref) {
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
      <path d="M12 7.668L7.881 11.8a1.1 1.1 0 01-1.558 0 1.108 1.108 0 010-1.563l4.898-4.912a1.1 1.1 0 011.558 0l4.898 4.912c.43.432.43 1.131 0 1.563a1.1 1.1 0 01-1.558 0L12 7.67zM7.881 18.676a1.1 1.1 0 01-1.558 0 1.108 1.108 0 010-1.563l4.898-4.912a1.1 1.1 0 011.558 0l4.898 4.912c.43.432.43 1.132 0 1.563a1.1 1.1 0 01-1.558 0L12 14.546l-4.119 4.13z" />
    </svg>
  );
});

ChevronsUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ChevronsUp.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// We should try to find a way to not hard-code these properties, if possible.
ChevronsUp.name = ChevronsUp.render.name || 'ChevronsUp';

export default ChevronsUp;
