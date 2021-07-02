import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Volume2 = React.forwardRef(function Volume2(props, ref) {
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
      <path d="M5.678 7.973l4.64-3.664c.728-.575 1.807-.063 1.807.858v13.666c0 .921-1.08 1.433-1.808.858l-4.64-3.664H2.113A1.105 1.105 0 011 14.929V9.07c0-.606.498-1.098 1.112-1.098h3.566zM9.9 7.452L6.763 9.929c-.197.156-.442.24-.695.24H3.225v3.661h2.843c.253 0 .498.085.695.241L9.9 16.548V7.452zm8.306-1.577a1.088 1.088 0 010-1.553 1.123 1.123 0 011.573 0 10.762 10.762 0 010 15.356 1.123 1.123 0 01-1.573 0 1.088 1.088 0 010-1.553 8.586 8.586 0 000-12.25zM14.715 9.32a1.088 1.088 0 010-1.553 1.123 1.123 0 011.573 0 5.925 5.925 0 010 8.454 1.123 1.123 0 01-1.573 0 1.088 1.088 0 010-1.552 3.749 3.749 0 000-5.35z" />
    </svg>
  );
});

Volume2.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Volume2.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Volume2.name = Volume2.render.name || 'Volume2';

export default Volume2;
