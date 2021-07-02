import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const RectangleHorizontal = React.forwardRef(function RectangleHorizontal(
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
      <path d="M24 16.019a4.481 4.481 0 01-4.481 4.481H4.48A4.481 4.481 0 010 16.019V7.98A4.481 4.481 0 014.481 3.5H19.52A4.481 4.481 0 0124 7.981v8.038zm-2.444 0V7.98a2.037 2.037 0 00-2.037-2.037H4.48a2.037 2.037 0 00-2.037 2.037v8.038c0 1.125.912 2.037 2.037 2.037H19.52a2.037 2.037 0 002.037-2.037z" />
    </svg>
  );
});

RectangleHorizontal.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

RectangleHorizontal.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
RectangleHorizontal.name =
  RectangleHorizontal.render.name || 'RectangleHorizontal';

export default RectangleHorizontal;
