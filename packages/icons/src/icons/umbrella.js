import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Umbrella = React.forwardRef(function Umbrella(props, ref) {
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
      <path d="M12 1.4a11.648 11.648 0 0111.595 10.54 1.1 1.1 0 01-1.095 1.205h-9.4v5.582a1.764 1.764 0 003.521.145l.006-.145a1.1 1.1 0 012.2 0 3.964 3.964 0 01-7.922.198l-.005-.198v-5.582H1.5a1.1 1.1 0 01-1.1-1.084l.005-.12A11.648 11.648 0 0112 1.4zm0 2.2a9.45 9.45 0 00-9.186 7.235l-.025.11H21.21l-.024-.11a9.45 9.45 0 00-8.916-7.231z" />
    </svg>
  );
});

Umbrella.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Umbrella.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Umbrella.name = Umbrella.render.name || 'Umbrella';

export default Umbrella;
