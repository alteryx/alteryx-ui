import React from 'react';
import PropTypes from 'prop-types';

// Mui Example:
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
const Navigation2 = React.forwardRef(function Navigation2(props, ref) {
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
      <path d="M12 6.327L7.2 19.405l4.25-2.438c.341-.195.759-.195 1.1 0l4.25 2.438L12 6.327zm0 12.885L5.66 22.85c-.897.515-1.946-.376-1.588-1.35L10.96 2.728c.356-.97 1.722-.97 2.078 0l6.89 18.773c.357.973-.692 1.864-1.589 1.35L12 19.211z" />
    </svg>
  );
});

Navigation2.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Navigation2.defaultProps = {
  color: 'currentColor',
  size: '16',
};

// Hard coding component names and render names
Navigation2.name = Navigation2.render.name || 'Navigation2';

export default Navigation2;
