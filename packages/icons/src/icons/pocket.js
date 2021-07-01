import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Pocket = React.forwardRef(function Pocket(props, ref) {
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
      <path d="M4.09 2h15.82A3.088 3.088 0 0123 5.086v5.926C23 17.081 18.075 22 12 22a11.006 11.006 0 01-7.778-3.218A10.981 10.981 0 011 11.012V5.086A3.088 3.088 0 014.09 2zm0 2.222a.865.865 0 00-.865.864v5.926a8.76 8.76 0 002.57 6.198A8.78 8.78 0 0012 19.778c4.846 0 8.775-3.925 8.775-8.766V5.086a.865.865 0 00-.865-.864H4.09zM12 12.404l3.168-3.165a1.113 1.113 0 011.574 0 1.11 1.11 0 010 1.571l-3.955 3.951a1.113 1.113 0 01-1.574 0l-3.955-3.95a1.11 1.11 0 010-1.572 1.113 1.113 0 011.574 0L12 12.404z" />
    </svg>
  );
});

Pocket.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Pocket.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Pocket.name = Pocket.render.name || 'Pocket';

export default Pocket;
