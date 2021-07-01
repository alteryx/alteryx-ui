import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const MicOff = React.forwardRef(function MicOff(props, ref) {
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
      <path d="M1.9.33l15.612 15.61a1.116 1.116 0 01.393.394l5.766 5.766a1.113 1.113 0 01-1.575 1.574l-5.225-5.226a8.038 8.038 0 01-3.76 1.567v1.758h2.846a1.113 1.113 0 110 2.227H8.04a1.113 1.113 0 010-2.227h2.845v-1.758a8.037 8.037 0 01-6.927-8.014v-1.979a1.113 1.113 0 012.227 0v1.988a5.814 5.814 0 005.507 5.848 1.114 1.114 0 01.613 0 5.817 5.817 0 002.971-1.004l-.306-.306-1-1c-3.269 1.701-6.032-1.038-6.032-3.316V9.516L.326 1.904A1.113 1.113 0 011.9.329zm17.025 8.58c.615 0 1.114.498 1.114 1.112v1.98c0 .474-.043.947-.127 1.413a1.113 1.113 0 11-2.191-.393c.06-.337.09-.679.091-1.02v-1.98c0-.614.498-1.113 1.113-1.113zm-8.767 2.813c-.056.684.129 1.221.556 1.612.427.39.946.558 1.556.502zM12.408.02a4.082 4.082 0 013.672 4.064V9.37a1.113 1.113 0 01-2.226 0V4.084a1.855 1.855 0 00-3.674-.371 1.113 1.113 0 01-2.182-.443 4.082 4.082 0 014.41-3.25z" />
    </svg>
  );
});

MicOff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MicOff.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
MicOff.name = MicOff.render.name || 'MicOff';

export default MicOff;
