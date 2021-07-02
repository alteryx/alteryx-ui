import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Minimize = React.forwardRef(function Minimize(props, ref) {
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
      <path d="M20.889 14.84a1.111 1.111 0 010 2.222h-2.963a.864.864 0 00-.864.864v2.963a1.111 1.111 0 01-2.222 0v-2.963a3.086 3.086 0 013.086-3.086h2.963zm-14.815 0a3.086 3.086 0 013.086 3.086v2.963a1.111 1.111 0 01-2.222 0v-2.963a.864.864 0 00-.864-.864H3.111a1.111 1.111 0 010-2.222h2.963zM8.05 2c.614 0 1.111.497 1.111 1.111v2.963A3.086 3.086 0 016.074 9.16H3.111a1.111 1.111 0 010-2.222h2.963a.864.864 0 00.864-.864V3.111C6.938 2.497 7.436 2 8.05 2zm7.902 0c.613 0 1.11.497 1.11 1.111v2.963c0 .477.388.864.865.864h2.963a1.111 1.111 0 010 2.222h-2.963a3.086 3.086 0 01-3.086-3.086V3.111c0-.614.497-1.111 1.11-1.111z" />
    </svg>
  );
});

Minimize.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Minimize.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Minimize.name = Minimize.render.name || 'Minimize';

export default Minimize;
