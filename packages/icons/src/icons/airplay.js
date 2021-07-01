import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Airplay = React.forwardRef(function Airplay(props, ref) {
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
      <path d="M5.079 15.827a1.112 1.112 0 110 2.222h-.99A3.088 3.088 0 011 14.963V5.086A3.088 3.088 0 014.09 2h15.82A3.088 3.088 0 0123 5.086v9.877a3.088 3.088 0 01-3.09 3.086h-.989a1.112 1.112 0 110-2.222h.99a.865.865 0 00.864-.864V5.086a.865.865 0 00-.865-.864H4.09a.865.865 0 00-.865.864v9.877c0 .477.387.864.865.864h.989zm7.776-1.575l4.943 5.926c.604.723.089 1.822-.854 1.822H7.056c-.943 0-1.458-1.099-.854-1.822l4.943-5.926a1.113 1.113 0 011.71 0zM12 16.699l-2.569 3.079h5.138L12 16.698z" />
    </svg>
  );
});

Airplay.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Airplay.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Airplay.name = Airplay.render.name || 'Airplay';

export default Airplay;
