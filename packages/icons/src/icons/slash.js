import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Slash = React.forwardRef(function Slash(props, ref) {
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
      <path d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1zM3.225 12a8.775 8.775 0 0014.144 6.942L5.059 6.63A8.737 8.737 0 003.224 12zM12 3.225a8.737 8.737 0 00-5.369 1.833l12.31 12.311A8.775 8.775 0 0012 3.225z" />
    </svg>
  );
});

Slash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Slash.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Slash.name = Slash.render.name || 'Slash';

export default Slash;
