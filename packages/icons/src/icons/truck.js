import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Truck = React.forwardRef(function Truck(props, ref) {
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
      <path d="M15.959 2c.615 0 1.113.497 1.113 1.111v3.827h2.846c.295 0 .578.117.787.326l2.969 2.963c.209.208.326.49.326.785v4.939c0 .613-.498 1.11-1.113 1.11h-1.134A3.584 3.584 0 0118.433 22a3.584 3.584 0 01-3.32-4.939H8.887A3.584 3.584 0 015.567 22a3.584 3.584 0 01-3.32-4.939H1.113A1.112 1.112 0 010 15.952V3.11C0 2.497.498 2 1.113 2H15.96zM5.567 17.062a1.36 1.36 0 00-1.36 1.358c0 .75.608 1.358 1.36 1.358a1.36 1.36 0 001.36-1.358c0-.75-.608-1.358-1.36-1.358zm12.866 0a1.36 1.36 0 00-1.36 1.358c0 .75.608 1.358 1.36 1.358a1.36 1.36 0 001.36-1.358c0-.75-.608-1.358-1.36-1.358zm-3.588-12.84H2.227V14.84h12.618V4.222zm4.611 4.938h-2.384v5.68h4.701v-3.367L19.456 9.16z" />
    </svg>
  );
});

Truck.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Truck.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Truck.name = Truck.render.name || 'Truck';

export default Truck;
