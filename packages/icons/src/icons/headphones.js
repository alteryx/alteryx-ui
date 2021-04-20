import React from 'react';
import PropTypes from 'prop-types';

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Headphones = React.forwardRef(function Headphones(props, ref) {
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
      <path d="M12 2c5.523 0 10 4.477 10 10v5.926l-.001.016.001.972A3.086 3.086 0 0118.914 22h-.988a3.086 3.086 0 01-3.086-3.086V15.95a3.086 3.086 0 013.086-3.087h1.851V12a7.778 7.778 0 00-15.555 0v.864h1.852a3.086 3.086 0 013.086 3.087v2.963A3.086 3.086 0 016.074 22h-.988A3.086 3.086 0 012 18.914V12C2 6.477 6.477 2 12 2zM6.074 15.086H4.222v3.828c0 .477.387.864.864.864h.988a.864.864 0 00.864-.864V15.95a.864.864 0 00-.864-.865zm13.704 0h-1.852a.864.864 0 00-.864.865v2.963c0 .477.387.864.864.864h.988a.864.864 0 00.864-.864v-3.828z" />
    </svg>
  );
});

Headphones.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Headphones.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// We should try to find a way to not hard-code these properties, if possible.
Headphones.name = Headphones.render.name || 'Headphones';

export default Headphones;
