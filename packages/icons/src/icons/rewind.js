import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Rewind = React.forwardRef(function Rewind(props, ref) {
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
      <path d="M23 5.11v13.78c0 .922-1.065 1.44-1.795.875l-8.9-6.89a1.12 1.12 0 01-.181-.178v6.194c0 .921-1.065 1.44-1.796.874l-8.899-6.89a1.104 1.104 0 010-1.75l8.9-6.89c.73-.565 1.795-.047 1.795.874v6.194a1.12 1.12 0 01.182-.177l8.899-6.89c.73-.566 1.795-.048 1.795.873zM9.899 7.373L3.924 12 9.9 16.626V7.374zm10.876 0L14.801 12l5.974 4.626V7.374z" />
    </svg>
  );
});

Rewind.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Rewind.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Rewind.name = Rewind.render.name || 'Rewind';

export default Rewind;
