import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Macro = React.forwardRef(function Macro(props, ref) {
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
      <path d="M12 4a8 8 0 110 16 8 8 0 010-16zm0 2.2a5.8 5.8 0 100 11.6 5.8 5.8 0 000-11.6zM1.5 10.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm21 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" />
    </svg>
  );
});

Macro.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Macro.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Macro.name = Macro.render.name || 'Macro';

export default Macro;
