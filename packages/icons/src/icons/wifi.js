import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Wifi = React.forwardRef(function Wifi(props, ref) {
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
      <path d="M12 18.635c.85 0 1.538.706 1.538 1.577 0 .87-.689 1.576-1.538 1.576-.85 0-1.538-.706-1.538-1.576 0-.871.689-1.577 1.538-1.577zm4.236-3.74c.519.379.64 1.117.272 1.65a1.135 1.135 0 01-1.608.278 4.897 4.897 0 00-5.79 0c-.519.379-1.239.254-1.608-.279a1.202 1.202 0 01.273-1.649 7.157 7.157 0 018.46 0zm3.76-3.687c.49.418.556 1.164.149 1.666a1.134 1.134 0 01-1.625.152 9.932 9.932 0 00-12.958 0c-.49.418-1.217.35-1.625-.152a1.203 1.203 0 01.148-1.666 12.195 12.195 0 0115.912 0zm3.613-3.71c.478.432.524 1.179.103 1.669-.421.49-1.15.537-1.628.105a14.968 14.968 0 00-20.168 0 1.134 1.134 0 01-1.628-.105 1.204 1.204 0 01.103-1.67c6.634-5.996 16.584-5.996 23.218 0z" />
    </svg>
  );
});

Wifi.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Wifi.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Wifi.name = Wifi.render.name || 'Wifi';

export default Wifi;
