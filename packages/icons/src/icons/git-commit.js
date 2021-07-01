import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const GitCommit = React.forwardRef(function GitCommit(props, ref) {
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
      <path d="M11.995 7c2.226 0 4.087 1.669 4.554 3.902h5.427c.565 0 1.024.492 1.024 1.098 0 .606-.459 1.098-1.024 1.098h-5.427C16.082 15.33 14.221 17 11.995 17c-2.225 0-4.087-1.669-4.554-3.902H2.024C1.46 13.098 1 12.606 1 12c0-.606.459-1.098 1.024-1.098h5.417C7.908 8.67 9.77 7 11.995 7zm0 2.195c-1.445 0-2.618 1.256-2.618 2.805 0 1.55 1.173 2.805 2.618 2.805 1.446 0 2.618-1.256 2.618-2.805 0-1.55-1.172-2.805-2.618-2.805z" />
    </svg>
  );
});

GitCommit.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

GitCommit.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
GitCommit.name = GitCommit.render.name || 'GitCommit';

export default GitCommit;
