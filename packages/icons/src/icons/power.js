import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Power = React.forwardRef(function Power(props, ref) {
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
      <path d="M17.5 7.486a1.113 1.113 0 010-1.573 1.11 1.11 0 011.572 0c3.905 3.91 3.904 10.247-.001 14.156a9.993 9.993 0 01-14.142 0c-3.905-3.91-3.906-10.246-.001-14.156a1.11 1.11 0 011.571 0 1.113 1.113 0 010 1.573 7.791 7.791 0 00.002 11.01 7.772 7.772 0 0010.998 0 7.791 7.791 0 00.002-11.01zm-6.606-5.374a1.112 1.112 0 112.222 0V12a1.112 1.112 0 11-2.222 0V2.112z" />
    </svg>
  );
});

Power.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Power.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Power.name = Power.render.name || 'Power';

export default Power;
