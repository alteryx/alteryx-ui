import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Clipboard = React.forwardRef(function Clipboard(props, ref) {
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
      <path d="M14.466 1c1.217 0 2.238.842 2.515 1.977h.937A3.086 3.086 0 0121 6.068V19.91c0 1.707-1.38 3.09-3.082 3.09H6.082A3.086 3.086 0 013 19.91V6.067c0-1.706 1.38-3.09 3.082-3.09h.937A2.591 2.591 0 019.534 1h4.932zM7.019 5.203h-.937a.864.864 0 00-.863.864V19.91c0 .478.387.865.863.865h11.836a.864.864 0 00.863-.865V6.067a.864.864 0 00-.863-.865h-.937a2.591 2.591 0 01-2.515 1.978H9.534A2.591 2.591 0 017.02 5.203zm7.447-1.978H9.534a.37.37 0 00-.37.37v.99c0 .204.166.37.37.37h4.932a.37.37 0 00.37-.37v-.99a.37.37 0 00-.37-.37z" />
    </svg>
  );
});

Clipboard.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Clipboard.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Clipboard.name = Clipboard.render.name || 'Clipboard';

export default Clipboard;
