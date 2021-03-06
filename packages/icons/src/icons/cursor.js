import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Cursor = React.forwardRef(function Cursor(props, ref) {
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
      <path d="M6.812 20.574c-.737.614-1.853.061-1.81-.897L5.79 1.56C5.831.62 6.95.158 7.641.793l13.416 12.306c.718.66.292 1.859-.682 1.917l-4.477.267 2.038 5.152c.214.543-.03 1.16-.56 1.407l-3.318 1.553a1.105 1.105 0 01-1.487-.573L10.383 17.6l-3.571 2.974zm.506-3.296l2.8-2.332a1.105 1.105 0 011.726.422l2.32 5.538 1.335-.625-2.216-5.604c-.277-.7.21-1.464.961-1.51l3.398-.202-9.747-8.941-.577 13.254z" />
    </svg>
  );
});

Cursor.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Cursor.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Cursor.name = Cursor.render.name || 'Cursor';

export default Cursor;
