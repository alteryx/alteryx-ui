import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const StarFilled = React.forwardRef(function StarFilled(props, ref) {
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
      height={newSize}
      width={newSize}
      viewBox="0 0 24 24"
      {...otherProps}
      fill={color}
      ref={ref}
    >
      <path d="M8.206 7.276l2.797-5.657a1.113 1.113 0 011.994 0l2.797 5.657 6.253.913a1.11 1.11 0 01.616 1.894l-4.525 4.4 1.068 6.216c.156.908-.798 1.6-1.614 1.17L12 18.934 6.408 21.87c-.816.428-1.77-.263-1.614-1.17l1.068-6.217-4.525-4.4a1.11 1.11 0 01.616-1.894l6.253-.913z" />
    </svg>
  );
});

StarFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

StarFilled.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
StarFilled.name = StarFilled.render.name || 'StarFilled';

export default StarFilled;
