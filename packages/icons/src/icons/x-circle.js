import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const XCircle = React.forwardRef(function XCircle(props, ref) {
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
      <path d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1zm0 2.225a8.775 8.775 0 100 17.55 8.775 8.775 0 000-17.55zm3.753 5.022a1.112 1.112 0 010 1.573L13.573 12l2.18 2.18a1.112 1.112 0 01-1.573 1.573L12 13.573l-2.18 2.18a1.112 1.112 0 01-1.573-1.573l2.18-2.18-2.18-2.18A1.112 1.112 0 019.82 8.247l2.18 2.18 2.18-2.18a1.112 1.112 0 011.573 0z" />
    </svg>
  );
});

XCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

XCircle.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
XCircle.name = XCircle.render.name || 'XCircle';

export default XCircle;
