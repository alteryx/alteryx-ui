import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Underline = React.forwardRef(function Underline(props, ref) {
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
      <path d="M4.973 3.111a1.11 1.11 0 112.219 0v6.914A4.812 4.812 0 0012 14.84a4.812 4.812 0 004.808-4.815V3.11a1.11 1.11 0 112.22 0v6.914c0 3.886-3.147 7.037-7.028 7.037s-7.027-3.15-7.027-7.037V3.11zM4.11 22a1.11 1.11 0 010-2.222h15.78a1.11 1.11 0 010 2.222H4.11z" />
    </svg>
  );
});

Underline.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Underline.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Underline.name = Underline.render.name || 'Underline';

export default Underline;
