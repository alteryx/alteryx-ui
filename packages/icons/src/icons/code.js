import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Code = React.forwardRef(function Code(props, ref) {
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
      <path d="M20.315 12l-5.147-5.113a1.1 1.1 0 010-1.563 1.117 1.117 0 011.574 0l5.932 5.894a1.1 1.1 0 010 1.564l-5.932 5.894a1.117 1.117 0 01-1.574 0 1.1 1.1 0 010-1.563L20.315 12zm-16.63 0l5.147 5.113a1.1 1.1 0 010 1.563 1.117 1.117 0 01-1.574 0l-5.932-5.894a1.1 1.1 0 010-1.564l5.932-5.894a1.117 1.117 0 011.574 0 1.1 1.1 0 010 1.563L3.685 12z" />
    </svg>
  );
});

Code.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Code.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Code.name = Code.render.name || 'Code';

export default Code;
