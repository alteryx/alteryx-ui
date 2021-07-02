import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const GitMerge = React.forwardRef(function GitMerge(props, ref) {
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
      <path d="M5.481 1a4.481 4.481 0 011.285 8.776 8.559 8.559 0 007.46 7.458 4.481 4.481 0 11-.034 2.455 10.982 10.982 0 01-7.488-4.034v6.123a1.222 1.222 0 11-2.445 0V9.794A4.483 4.483 0 015.482 1zM18.52 16.481a2.037 2.037 0 100 4.075 2.037 2.037 0 000-4.075zM5.48 3.444a2.037 2.037 0 100 4.075 2.037 2.037 0 000-4.075z" />
    </svg>
  );
});

GitMerge.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

GitMerge.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
GitMerge.name = GitMerge.render.name || 'GitMerge';

export default GitMerge;
