import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const X = React.forwardRef(function X(props, ref) {
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
      <path d="M18.778 5.222a1.1 1.1 0 01.085 1.46l-.085.096L13.555 12l5.223 5.222a1.1 1.1 0 01-1.46 1.641l-.096-.085L12 13.555l-5.222 5.223a1.1 1.1 0 01-1.641-1.46l.085-.096L10.445 12 5.222 6.778a1.1 1.1 0 011.46-1.641l.096.085L12 10.445l5.222-5.223a1.1 1.1 0 011.556 0z" />
    </svg>
  );
});

X.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

X.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
X.name = X.render.name || 'X';

export default X;
