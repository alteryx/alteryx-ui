import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Zap = React.forwardRef(function Zap(props, ref) {
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
      <path d="M10.742 15.089H3.113c-.942 0-1.456-1.1-.853-1.824l9.874-11.861c.71-.853 2.093-.252 1.956.85l-.832 6.657h7.629c.942 0 1.456 1.1.853 1.824l-9.874 11.861c-.71.853-2.093.252-1.956-.85l.832-6.657zm-5.257-2.224H12c.668 0 1.185.586 1.102 1.25l-.517 4.144 5.93-7.124H12a1.112 1.112 0 01-1.102-1.25l.517-4.144-5.93 7.124z" />
    </svg>
  );
});

Zap.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Zap.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Zap.name = Zap.render.name || 'Zap';

export default Zap;
