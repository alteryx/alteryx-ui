import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const GitBranch = React.forwardRef(function GitBranch(props, ref) {
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
      <path d="M18.519 1a4.481 4.481 0 011.17 8.808 11.003 11.003 0 01-9.882 9.882 4.481 4.481 0 11-5.547-5.484V2.222a1.222 1.222 0 012.444 0v11.984a4.49 4.49 0 013.072 3.028 8.559 8.559 0 007.458-7.46A4.481 4.481 0 0118.518 1zM5.48 16.481a2.037 2.037 0 100 4.075 2.037 2.037 0 000-4.075zM18.52 3.444a2.037 2.037 0 100 4.075 2.037 2.037 0 000-4.075z" />
    </svg>
  );
});

GitBranch.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

GitBranch.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
GitBranch.name = GitBranch.render.name || 'GitBranch';

export default GitBranch;
