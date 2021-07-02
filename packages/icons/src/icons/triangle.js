import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Triangle = React.forwardRef(function Triangle(props, ref) {
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
      <path d="M9.225 3.483C9.816 2.56 10.867 2 12 2c1.133 0 2.184.56 2.774 1.483l8.793 13.91c.576.946.579 2.109.009 3.057s-1.629 1.538-2.793 1.55H3.204c-1.152-.012-2.21-.602-2.78-1.55a2.939 2.939 0 01.019-3.072L9.225 3.483zM2.454 18.5a.821.821 0 00-.003.856c.16.265.456.43.766.434H20.77a.917.917 0 00.778-.434.815.815 0 00.007-.84l-8.78-13.89A.919.919 0 0012 4.21a.92.92 0 00-.774.412L2.454 18.499z" />
    </svg>
  );
});

Triangle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Triangle.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Triangle.name = Triangle.render.name || 'Triangle';

export default Triangle;
