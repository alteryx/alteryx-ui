import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const RectangleVertical = React.forwardRef(function RectangleVertical(
  props,
  ref
) {
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
      <path d="M16.019 0A4.481 4.481 0 0120.5 4.481V19.52A4.481 4.481 0 0116.019 24H7.98A4.481 4.481 0 013.5 19.519V4.48A4.481 4.481 0 017.981 0h8.038zm0 2.444H7.98a2.037 2.037 0 00-2.037 2.037V19.52c0 1.125.912 2.037 2.037 2.037h8.038a2.037 2.037 0 002.037-2.037V4.48a2.037 2.037 0 00-2.037-2.037z" />
    </svg>
  );
});

RectangleVertical.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

RectangleVertical.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
RectangleVertical.name = RectangleVertical.render.name || 'RectangleVertical';

export default RectangleVertical;
