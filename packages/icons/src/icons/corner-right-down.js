import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const CornerRightDown = React.forwardRef(function CornerRightDown(props, ref) {
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
      <path d="M11.014 3a5.055 5.055 0 015.054 5.055v9.156l3.038-3.037a1.11 1.11 0 011.569 1.57l-4.931 4.931-.02.02a1.116 1.116 0 01-.054.047l.074-.067a1.12 1.12 0 01-.67.32 1.106 1.106 0 01-.115.005l-.115-.006a1.115 1.115 0 01-.67-.319l-4.931-4.931a1.11 1.11 0 111.569-1.57l3.037 3.038V8.055a2.836 2.836 0 00-2.835-2.836H4.11A1.11 1.11 0 014.11 3h6.904z" />
    </svg>
  );
});

CornerRightDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CornerRightDown.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
CornerRightDown.name = CornerRightDown.render.name || 'CornerRightDown';

export default CornerRightDown;
