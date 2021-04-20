import React from 'react';
import PropTypes from 'prop-types';

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const ArrowTwoConnected = React.forwardRef(function ArrowTwoConnected(
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
      <path d="M9.82 18.11a1.104 1.104 0 010 1.566 1.116 1.116 0 01-1.573 0l-6.921-6.893a1.104 1.104 0 010-1.566l6.921-6.893a1.116 1.116 0 011.573 0 1.104 1.104 0 010 1.567l-5.022 5.001h14.403L14.18 5.891a1.104 1.104 0 010-1.567 1.116 1.116 0 011.573 0l6.921 6.893a1.104 1.104 0 010 1.566l-6.921 6.893a1.116 1.116 0 01-1.573 0 1.104 1.104 0 010-1.567l5.022-5.002H4.797l5.023 5.002z" />
    </svg>
  );
});

ArrowTwoConnected.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowTwoConnected.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// We should try to find a way to not hard-code these properties, if possible.
ArrowTwoConnected.name = ArrowTwoConnected.render.name || 'ArrowTwoConnected';

export default ArrowTwoConnected;
